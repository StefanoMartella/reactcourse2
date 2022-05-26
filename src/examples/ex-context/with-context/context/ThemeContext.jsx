import { createContext, useState } from "react";
import themes from "./theme";

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () =>
    setTheme((oldTheme) =>
      oldTheme === themes.light ? themes.dark : themes.light
    );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
