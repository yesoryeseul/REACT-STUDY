import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();
export const useDarkMode = () => useContext(DarkModeContext); // 일일이 가져오지 않아도 사용하기 편하게

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    updateDarkMode(!isDark);
  };

  // 어플리케이션 실행 딱 한번만 실행
  useEffect(() => {
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode); // 리액트 내부 상태 업데이트
    updateDarkMode(isDarkMode); // 웹페이지 html dark 클래스 넣을지 말지에 대한 행위
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const updateDarkMode = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};
