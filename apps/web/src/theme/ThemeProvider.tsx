import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => undefined,
  setTheme: () => undefined
});

const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('telecrm:theme');
  return stored === 'dark' ? 'dark' : 'light';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('telecrm:theme', theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme(prev => (prev === 'light' ? 'dark' : 'light')),
      setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeMode = () => useContext(ThemeContext);

