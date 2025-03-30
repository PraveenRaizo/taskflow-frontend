import { ThemeOptions } from "@mui/material";

export const lightTheme: ThemeOptions = {
    palette: {
      mode: 'light',
      primary: { main: '#1976d2' }, // Blue primary
      secondary: { main: '#f50057' }, // Pink secondary
      background: { default: '#ffffff', paper: '#f5f5f5' },
      text: { primary: '#000000', secondary: '#555' },
    },
  };
  
  export const darkTheme: ThemeOptions = {
    palette: {
      mode: 'dark',
      primary: { main: '#90caf9' }, // Light blue
      secondary: { main: '#f48fb1' }, // Light pink
      background: { default: '#121212', paper: '#1e1e1e' },
      text: { primary: '#ffffff', secondary: '#bbb' },
    },
  };