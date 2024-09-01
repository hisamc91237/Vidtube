import React from "react";
import { useState } from "react";
import { useTheme } from "../../useContextHook/useTheme";

const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div
      className={`sticky top-0 z-10 flex flex-row items-center justify-between h-20 shadow-lg px-4 md:px-5 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } text-${isDarkMode ? "white" : "bg-gray-700"}`}
    ></div>
  );
};

export default Header;
