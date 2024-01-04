import { useLanguage } from "../../hooks/useLanguage";

export const SwitchLanguage = () => {
  const { language, setLanguage } = useLanguage();

  const handleChangeLanguage = (language: "SP" | "EN") => {
    setLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <label className="switch rocker rocker-small mt-2">
      <input
        type="checkbox"
        checked={language === "SP"}
        onClick={() => {
          language === "SP"
            ? handleChangeLanguage("EN")
            : handleChangeLanguage("SP");
        }}
        onChange={() => {
          language === "SP"
            ? handleChangeLanguage("EN")
            : handleChangeLanguage("SP");
        }}
      />
      {/* En === false */}
      <span className={`switch-right bottom-3 right-9 mr-1 text-black`}>
        EN
      </span>
      {/* pt === true */}
      <span className={`switch-left bottom-3 left-9 ml-1  text-black`}>SP</span>
    </label>
  );
};
