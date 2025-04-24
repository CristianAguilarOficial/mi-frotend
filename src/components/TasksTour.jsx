// src/components/TasksTour.jsx
import { HelpCircle } from "lucide-react"; // usa Lucide para el ícono
import { useState, useEffect } from "react";
import Joyride, { STATUS } from "react-joyride";

import { useParams } from "react-router-dom";

export function TasksTour() {
  const [run, setRun] = useState(false);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    // Verificar si es la primera vez que el usuario visita esta página
    const hasSeenTasksTour = localStorage.getItem("hasSeenTasksTour");

    if (!hasSeenTasksTour) {
      // Configuramos los pasos del tour
      setSteps([
        {
          target: ".tasks-grid",
          content:
            "Aquí puedes ver todas tus tareas guardadas. Cada tarjeta representa una tarea individual.",
          disableBeacon: true,
          placement: "center",
        },
        {
          target: ".task-card",
          content:
            "Esta es una tarjeta de tarea. Muestra el título, descripción y fecha de tu nota.",
          disableBeacon: true,
        },
        {
          target: ".task-edit-button",
          content: "Haz clic aquí para editar los detalles de tu tarea.",
          disableBeacon: true,
        },
        {
          target: ".task-delete-button",
          content:
            "Si ya no necesitas esta tarea, puedes eliminarla con este botón.",
          disableBeacon: true,
        },
        {
          target: "a[href='/add-task']",
          content:
            "¿Necesitas añadir una nueva tarea? Haz clic aquí para crear una.",
          disableBeacon: true,
        },
        {
          target: "#btn-create-task",
          content:
            "También puedes hacer clic aquí para añadir una nueva tarea.",
          disableBeacon: true,
        },
      ]);

      // Iniciamos el tour
      setRun(true);
    }
  }, []);

  const handleJoyrideCallback = (data) => {
    const { status } = data;

    // Cuando el tour termina o se salta
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Marcamos que el usuario ya ha visto el tour
      localStorage.setItem("hasSeenTasksTour", "true");
      setRun(false);
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton={false}
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          primaryColor: "#22c55e", // Color verde que combina con tu tema
          backgroundColor: "#27272a", // Zinc-800
          textColor: "#ffffff",
          arrowColor: "#27272a",
          overlayColor: "rgba(0, 0, 0, 0.75)",
        },
        tooltip: {
          borderRadius: "8px",
          fontSize: "15px",
        },
        buttonNext: {
          backgroundColor: "#22c55e",
          borderRadius: "4px",
          color: "#ffffff",
        },
        buttonBack: {
          color: "#22c55e",
          marginRight: 10,
        },
        buttonSkip: {
          color: "#f87171",
        },
      }}
    />
  );
}

// src/components/TaskFormTour.jsx

export function TaskFormTour() {
  const [run, setRun] = useState(false);
  const [steps, setSteps] = useState([]);
  const params = useParams();

  const isEditing = !!params.id;

  useEffect(() => {
    // Verificar si es la primera vez que el usuario visita esta página
    const hasSeenTaskFormTour = localStorage.getItem("hasSeenTaskFormTour");

    if (!hasSeenTaskFormTour) {
      // Configuramos los pasos del tour
      setSteps([
        {
          target: ".task-form-container",
          content: isEditing
            ? "Aquí puedes editar los detalles de tu tarea existente."
            : "¡Bienvenido a la creación de tareas! Aquí puedes crear una nueva nota rápidamente.",
          disableBeacon: true,
          placement: "center",
        },
        {
          target: "input[name='title']",
          content: "Escribe un título descriptivo para tu tarea.",
          disableBeacon: true,
        },
        {
          target: "textarea[name='description']",
          content:
            "Añade todos los detalles importantes en la descripción de la tarea.",
          disableBeacon: true,
        },
        {
          target: "input[name='date']",
          content:
            "Selecciona una fecha para tu tarea. Si no eliges una, se usará la fecha actual.",
          disableBeacon: true,
        },
        {
          target: ".task-submit-button",
          content: isEditing
            ? "Haz clic aquí para guardar tus cambios."
            : "Haz clic aquí para crear tu nueva tarea y guardarla.",
          disableBeacon: true,
        },
      ]);

      // Iniciamos el tour
      setRun(true);
    }
  }, [isEditing]);

  const handleJoyrideCallback = (data) => {
    const { status } = data;

    // Cuando el tour termina o se salta
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Marcamos que el usuario ya ha visto el tour
      localStorage.setItem("hasSeenTaskFormTour", "true");
      setRun(false);
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton={false}
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          primaryColor: "#22c55e", // Color verde que combina con tu tema
          backgroundColor: "#27272a", // Zinc-800
          textColor: "#ffffff",
          arrowColor: "#27272a",
          overlayColor: "rgba(0, 0, 0, 0.75)",
        },
        tooltip: {
          borderRadius: "8px",
          fontSize: "15px",
        },
        buttonNext: {
          backgroundColor: "#22c55e",
          borderRadius: "4px",
          color: "#ffffff",
        },
        buttonBack: {
          color: "#22c55e",
          marginRight: 10,
        },
        buttonSkip: {
          color: "#f87171",
        },
      }}
    />
  );
}

// Botón para reiniciar tours (opcional)
export function ResetToursButton() {
  const handleReset = () => {
    localStorage.removeItem("hasSeenTasksTour");
    localStorage.removeItem("hasSeenTaskFormTour");
    window.location.reload();
  };

  return (
    <button
      onClick={handleReset}
      className="fixed bottom-4 right-4 z-50 flex items-center justify-end gap-2 bg-transparent p-2 rounded-full group transition-all"
    >
      {/* Texto - Solo visible en sm+ y aparece a la izquierda */}
      <span
        className="hidden sm:inline-block text-sm text-white whitespace-nowrap
      opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
      transition-all duration-300"
      >
        Tutorial
      </span>

      {/* Ícono animado (oculto al hacer hover en sm+) */}
      <HelpCircle
        className="w-6 h-6 text-white transition-transform duration-300
      group-hover:translate-x-5 group-hover:opacity-0 hidden sm:block"
      />

      {/* Ícono siempre visible en móviles */}
      <HelpCircle className="w-6 h-6 text-white sm:hidden" />
    </button>
  );
}
