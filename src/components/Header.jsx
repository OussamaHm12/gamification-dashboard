import React, { useEffect, useState } from 'react';
import { Input } from '@windmill/react-ui';
import { Sun, Moon } from 'lucide-react';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return [isDark, setIsDark];
};

const Header = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800 border-b border-border">
      <Input className="w-64" placeholder="Search..." />
      <button
        className="p-2 rounded-full focus:outline-none focus:ring"
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  );
};

export default Header;
