import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import TaskFormPage from "./pages/TaskFormPage";
import QuienesSomos from "./pages/QuienesSomos";
import VerifyEmailPage from "./pages/VerifyEmailPage"; // Nueva página
import Navbar from "./components/Navbar";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

import ProtectedRouter from "./ProtectedRouter";
import { TasksProvider } from "./context/TasksConstext";
function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <main className=" h-screen bg-zinc-900">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
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
            </Routes>
          </main>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
