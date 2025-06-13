// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaMedal, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-full min-h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col p-4 border-r border-sidebar-border">
      <h1 className="text-2xl font-bold mb-8">🎮 Gamification</h1>

      <nav className="flex flex-col gap-3 flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent/60 ${isActive ? 'bg-sidebar-accent' : ''}`
          }
        >
          <FaTachometerAlt /> Dashboard
        </NavLink>

        <NavLink
          to="/defis"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent/60 ${isActive ? 'bg-sidebar-accent' : ''}`
          }
        >
          <FaMedal /> Défis
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent/60 ${isActive ? 'bg-sidebar-accent' : ''}`
          }
        >
          <FaUsers /> Utilisateurs
        </NavLink>

        <NavLink
          to="/login"
          className="flex items-center gap-3 px-4 py-2 mt-auto text-red-400 hover:bg-sidebar-accent/60 hover:text-red-300"
        >
          <FaSignOutAlt /> Déconnexion
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
