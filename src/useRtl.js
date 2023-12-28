// useRtl.js
import { useTranslation } from "react-i18next";

const useRtl = () => {
  const { i18n } = useTranslation();
  return i18n.language === "ar";
};

export default useRtl;
