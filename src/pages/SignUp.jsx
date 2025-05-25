import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'Yes'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      isAgency: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  const isFormValid = 
    formData.fullName.trim() !== '' && 
    formData.phone.trim() !== '' && 
    formData.email.trim() !== '' && 
    formData.password.trim() !== '';

  return (
    <div className="w-full h-full flex flex-col p-4 m-2 min-h-screen">

          <h2 className="flex1 text-2xl font-bold mb-8">
            Create Your<br />PopX Account
          </h2>
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-1">
          <div>
            <label className="block mb-0.5 text-xs font-medium">
              Full Name<span className="text-red-500 font-medium">*</span>
            </label>
            <input 
              type="text" 
              name="fullName"
              className="w-full p-1.5 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs focus:ring-offset-0 focus:border-blue-500"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-0.5 text-xs font-medium">
              Phone number<span className="text-red-500 font-medium">*</span>
            </label>
            <input 
              type="tel" 
              name="phone"
              className="w-full p-1.5 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs focus:ring-offset-0 focus:border-blue-500"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-0.5 text-xs font-medium">
              Email address<span className="text-red-500 font-medium">*</span>
            </label>
            <input 
              type="email" 
              name="email"
              className="w-full p-1.5 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs focus:ring-offset-0 focus:border-blue-500"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-0.5 text-xs font-medium">
              Password<span className="text-red-500 font-medium">*</span>
            </label>
            <input 
              type="password" 
              name="password"
              className="w-full p-1.5 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs focus:ring-offset-0 focus:border-blue-500"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-0.5 text-xs font-medium">
              Company name
            </label>
            <input 
              type="text" 
              name="company"
              className="w-full p-1.5 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs focus:ring-offset-0 focus:border-blue-500"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 text-xs font-medium">
              Are you an Agency?<span className="text-red-500 font-medium">*</span>
            </label>
            <div className="flex gap-3 mb-6">
              <div className="flex items-center relative">
                <input 
                  type="radio" 
                  id="agency-yes" 
                  name="isAgency"
                  className="appearance-none w-4 h-4 border-2 border-[#6c25ff] rounded-full outline-none cursor-pointer checked:bg-[#6c25ff]
[#6c25ff] checked:border-[#6c25ff] relative"
                  checked={formData.isAgency === 'Yes'}
                  onChange={() => handleRadioChange('Yes')}
                />
                {formData.isAgency === 'Yes' && (
                  <span className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full pointer-events-none"></span>
                )}
                <label htmlFor="agency-yes" className="ml-1 text-xs">Yes</label>
              </div>
              <div className="flex items-center relative">
                <input 
                  type="radio" 
                  id="agency-no" 
                  name="isAgency"
                  className="appearance-none w-4 h-4 border-2 border-[#6c25ff] rounded-full outline-none cursor-pointer checked:bg-[#6c25ff] checked:border-[#6c25ff] relative"
                  checked={formData.isAgency === 'No'}
                  onChange={() => handleRadioChange('No')}
                />
                {formData.isAgency === 'No' && (
                  <span className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full pointer-events-none"></span>
                )}
                <label htmlFor="agency-no" className="ml-1 text-xs">No</label>
              </div>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full py-2 mt-8 bg-[#6c25ff] text-white rounded-lg text-base font-medium cursor-pointer text-center transition-opacity duration-200 disabled:opacity-70"
            disabled={!isFormValid}
          >
            Create Account
          </button>
        </form>
    </div>
  );
}

export default SignupPage;