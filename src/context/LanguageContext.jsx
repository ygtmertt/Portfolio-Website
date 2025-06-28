import { createContext, useContext, useState, useEffect } from "react";
import { fetchLanguageData } from "../api/fetchLanguage";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const loadData = async (lang) => {
    setLoading(true);
    const result = await fetchLanguageData(lang);
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadData(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
