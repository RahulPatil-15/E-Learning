// src/components/StudentPage.js

import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const StudentPage = () => {
  const loggedData = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('lms-token');
    loggedData.setLoggedUser(null);
    navigate('/signin');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-1/4 p-4">
        <h2 className="text-2xl font-bold mb-8">LMS_NAME</h2>
        <ul className="space-y-4">
          <li><a href="/dashboard" className="block py-2">My Profile</a></li>
          <li><a href="/courses" className="block py-2">Enrolled Courses</a></li>
          <li><a href="/wishlist" className="block py-2">Wishlist</a></li>
          <li><a href="/settings" className="block py-2">Settings</a></li>
          <li>
            <button onClick={logout} className="w-full text-left py-2">Logout</button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="bg-gray-900 text-white flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">My Profile</h1>
          <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 rounded-full w-16 h-16"></div>
              <div>
                <h2 className="text-xl">Your Name</h2>
                <p className="text-gray-300">your.email@example.com</p>
              </div>
            </div>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">Edit</button>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="mb-4">Write Something about yourself</p>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;