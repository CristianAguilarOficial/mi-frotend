import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import TaskFormPage from './pages/TaskFormPage';
import QuienesSomos from './pages/QuienesSomos';
import VerifyEmailPage from './pages/VerifyEmailPage'; // Nueva página
import Navbar from './components/Navbar';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import NotFound from './pages/NotFound';
import ParticlesBackground from './components/ParticlesBackground';
import BannerSinBackend from './components/BannerSinBackend'; // Importa el nuevo componente BannerSinBackground

import ProtectedRouter from './ProtectedRouter';
import { TasksProvider } from './context/TasksConstext';
function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <main className="relative min-h-screen flex flex-col">
            <ParticlesBackground />
            <div className="absolute inset-0 backdrop-blur-xs z-0" />
            <div className="relative z-10">
              <Navbar />
            <BannerSinBackend  mensaje='los servidores del backend se apagaron por que se acabo la membrecía gratuita'/>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/forgot-password"
                  element={<ForgotPasswordPage />}
                />
                <Route
                  path="/reset-password/:token"
                  element={<ResetPasswordPage />}
                />
                <Route
                  path="/verify-email/:token"
                  element={<VerifyEmailPage />}
                />

                <Route element={<ProtectedRouter />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/add-task" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskFormPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Route>

                {/* Ruta 404 - debe ser la última */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
