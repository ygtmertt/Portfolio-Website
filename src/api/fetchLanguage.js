import axios from "axios";

export const fetchLanguageData = async (lang = "en") => {
  const res = await axios.get("/data.json");
  return res.data[lang];
};
