import React from "react";
import { useTheme } from "@heroui/use-theme";
import "../styles/ThemeSwitcher.css";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    if (theme) {
      document.body.setAttribute("data-theme", theme);
    }
  }, [theme]);

  // Manejar el cambio de tema basado en el estado del checkbox
  const handleToggle = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  const oppositeTheme = theme === "dark" ? "light" : "dark";

  return (
    <div className="theme-switcher">
      <p className="theme-text">
         Switch to <span>{oppositeTheme}</span> mode
      </p>
      <label className="toggle-container">
        <input
          type="checkbox"
          checked={theme === "dark"} // Sincroniza con el tema actual
          onChange={handleToggle}
        />
        <span className="slider" />
      </label>
    </div>
  );
};

