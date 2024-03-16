'use client';
import { useEffect, useState } from 'react';

const DarkToggle = () => {
  // Assuming 'light' is your default theme
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // On component mount, check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    // Toggle between 'light' and 'dark' themes
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Update localStorage and the document's attribute
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <label className="flex cursor-pointer items-center gap-2 p-2">
      {/* Your SVG icons here */}
      <span>Dark Mode</span>
      <input
        type="checkbox"
        id="theme-toggle"
        className="theme-controller toggle"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      {/* Second SVG icon here */}
    </label>
  );
};

export default DarkToggle;
