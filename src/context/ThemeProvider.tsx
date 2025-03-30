'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@/theme/theme';
import { CssBaseline } from '@mui/material';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme
  const theme: Theme = createTheme(themeMode === 'dark' ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider value={{ theme: themeMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
