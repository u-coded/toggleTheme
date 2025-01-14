const root = document.documentElement;
const buttonElement = document.querySelector("[data-toggle-theme]");

// テーマを設定する関数
const setTheme = (theme) => {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    buttonElement.classList.add("is-dark");
    buttonElement.textContent = "ライトモード";
  } else {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    buttonElement.classList.remove("is-dark");
    buttonElement.textContent = "ダークモード";
  }
};

// テーマを適用する関数
const applyTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }
};

// ボタンクリック時の処理
const handleToggleClick = () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
};

// 初期化
buttonElement.addEventListener("click", handleToggleClick);
applyTheme();
