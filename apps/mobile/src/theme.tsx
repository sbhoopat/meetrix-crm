import { createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme>('dark');

export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);

export const palette = {
  dark: {
    background: '#05060B',
    panel: '#0F172A',
    text: '#F8FAFC'
  },
  light: {
    background: '#F8FAFC',
    panel: '#FFFFFF',
    text: '#0F172A'
  },
  neon: {
    orange: '#FF8A3C',
    cyan: '#2EE4FF',
    purple: '#C084FC'
  }
};

