import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="flex flex-col h-full w-full justify-end">
      <div className="p-5 flex flex-col pb-10 w-full">
        <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-sm text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="mt-auto">
          <Link to="/signup">
            <div className="w-full py-3 bg-[#6c25ff] text-white rounded-lg text-lg font-medium cursor-pointer text-center mb-3">
              Create Account
            </div>
          </Link>
          <Link to="/login">
            <div className="w-full py-3 bg-[#e1d4ff] text-gray-800 rounded-lg text-lg font-medium cursor-pointer text-center">
              Already Registered? Login
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;