// src/ThemeProvider.tsx
import React, { ReactNode } from 'react';
import { useTheme } from './useThem';


type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-${theme}`}>
      <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      {children}
    </div>
  );
};
