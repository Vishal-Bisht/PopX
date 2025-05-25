import { FaUserCircle } from 'react-icons/fa';

function AccountPage() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-50">
      <div className="bg-white p-5 border-b border-gray-200 sticky top-0 z-10">
        <h1 className="text-lg font-bold">Account Settings</h1>
      </div>
      <div className="flex p-5 items-center">
        <div className="relative mr-4">
          <FaUserCircle className="w-[70px] h-[70px] text-gray-300 rounded-full bg-gray-100" />
          <div className="absolute bottom-0 right-0 bg-[#6c25ff] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            ✏️
          </div>
        </div>
        <div>
          <h2 className="font-bold text-base">Marry Doe</h2>
          <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>
      <div className="h-md p-5 border-b border-dashed border-gray-400">
        <p className="text-sm leading-relaxed text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default AccountPage;