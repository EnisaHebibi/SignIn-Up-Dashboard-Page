import { BrowserRouter as Router, Routes, Route } from "react-router";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Router</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
