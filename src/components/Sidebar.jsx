// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaMedal, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#1E293B] text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">🎮 Gamification</h1>

      <nav className="flex flex-col gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#334155] ${isActive ? 'bg-[#334155]' : ''}`
          }
        >
          <FaTachometerAlt /> Dashboard
        </NavLink>

        <NavLink
          to="/defis"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#334155] ${isActive ? 'bg-[#334155]' : ''}`
          }
        >
          <FaMedal /> Défis
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#334155] ${isActive ? 'bg-[#334155]' : ''}`
          }
        >
          <FaUsers /> Utilisateurs
        </NavLink>

        <NavLink
          to="/login"
          className="flex items-center gap-3 px-4 py-2 mt-auto text-red-400 hover:bg-[#334155] hover:text-red-300"
        >
          <FaSignOutAlt /> Déconnexion
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
