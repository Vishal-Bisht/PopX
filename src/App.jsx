import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import AccountPage from './pages/Account';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="w-[375px] h-[90vh] max-h-[700px] bg-white shadow-lg overflow-hidden relative flex flex-col rounded-2xl">
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;