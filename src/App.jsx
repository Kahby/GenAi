import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SubmitPromptPage from './pages/SubmitPromptPage';
import EvaluationProcessPage from './pages/EvaluationProcessPage';
import ScoreboardPage from './pages/ScoreboardPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit" element={<SubmitPromptPage />} />
          <Route path="/evaluation" element={<EvaluationProcessPage />} />
          <Route path="/scoreboard" element={<ScoreboardPage />} />
          <Route path="/login" element={<AdminLoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
