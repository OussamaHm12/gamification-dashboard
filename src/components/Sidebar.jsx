// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaMedal, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleSidebar}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-sidebar text-sidebar-foreground flex flex-col p-4 border-r border-sidebar-border transition-transform lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="self-end mb-4 p-2 lg:hidden"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        >
          ✕
        </button>
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
      </aside>
    </>
  );
};

export default Sidebar;
