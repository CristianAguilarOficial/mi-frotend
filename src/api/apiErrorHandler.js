// src/utils/apiErrorHandler.js
/**
 * Maneja los errores de las peticiones API de manera centralizada
 * @param {Error} error - Error capturado en el catch de la petición
 * @param {Function} setError - Función setState para actualizar el estado de error
 * @param {Function} navigate - Función navigate de react-router-dom (opcional)
 * @returns {Object} - Objeto con información del error procesada
 */
export const handleApiError = (error, setError, navigate = null) => {
  console.error('API Error:', error);

  // Objeto de error por defecto
  const errorData = {
    message: 'Ha ocurrido un error inesperado',
    status: 500,
  };

  // Verificar si hay una respuesta del servidor
  if (error.response) {
    // El servidor respondió con un código de estado fuera del rango 2xx
    errorData.status = error.response.status;
    errorData.message =
      error.response.data?.message || `Error ${error.response.status}`;

    // Manejar errores específicos por código
    switch (error.response.status) {
      case 401:
        errorData.message = 'Sesión expirada o no autorizada';
        // Redirigir al login si se proporciona navigate
        if (navigate) {
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
        break;
      case 403:
        errorData.message = 'No tienes permiso para acceder a este recurso';
        break;
      case 404:
        errorData.message = 'El recurso solicitado no existe';
        break;
      case 422:
        errorData.message = 'Datos de formulario inválidos';
        // Si hay errores de validación, mostrarlos
        if (error.response.data?.errors) {
          errorData.validationErrors = error.response.data.errors;
        }
        break;
      default:
        // Para cualquier otro código de estado
        break;
    }
  } else if (error.request) {
    // La solicitud se realizó pero no se recibió respuesta
    errorData.message = 'No se pudo conectar con el servidor';
    errorData.status = 0;
  }

  // Actualizar el estado de error si se proporcionó setError
  if (setError) {
    setError(errorData);
  }

  return errorData;
};

/**
 * Hook personalizado para mostrar errores API en un componente toast o alerta
 * @param {Object} error - Objeto de error
 * @param {Function} showToast - Función para mostrar toast/alerta
 */
export const useApiErrorDisplay = (error, showToast) => {
  React.useEffect(() => {
    if (error) {
      showToast({
        title: `Error ${error.status || ''}`,
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, showToast]);
};

/**
 * Formatea los errores de validación para mostrarlos en un formulario
 * @param {Object} validationErrors - Objeto con errores de validación
 * @returns {Object} - Objeto con errores formateados por campo
 */
export const formatValidationErrors = (validationErrors) => {
  if (!validationErrors) return {};

  const formattedErrors = {};

  // Convertir errores a formato {field: message}
  Object.entries(validationErrors).forEach(([key, value]) => {
    formattedErrors[key] = Array.isArray(value) ? value[0] : value;
  });

  return formattedErrors;
};
