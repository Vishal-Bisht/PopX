import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="min-h-screen flex flex-col bg-white p-4 m-2 gap-2">
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-2">Signin to your<br />PopX account</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        <div>
          <label className="block mb-1 text-sm font-medium">
            Email Address<span className="text-red-500 font-medium ml-1">*</span>
          </label>
          <input 
            type="email" 
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#6c25ff]"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">
            Password<span className="text-red-500 font-medium ml-1">*</span>
          </label>
          <input 
            type="password" 
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#6c25ff]"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-3 rounded-lg text-lg font-medium text-white text-center transition-opacity duration-200 mt-2"
          style={{ backgroundColor: isFormValid ? '#6c25ff' : '#ccc', opacity: isFormValid ? 1 : 0.7 }}
          disabled={!isFormValid}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;