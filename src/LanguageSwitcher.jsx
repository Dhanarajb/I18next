// LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";
import useRtl from './useRtl'; // Import the custom hook
import './App.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isRTL = useRtl();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={isRTL ? 'rtl-content' : ''}>
      <label htmlFor="language-select">Select Language: </label>
      <select
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="ar">العربية</option>
        <option value="ja">日本語</option>
        <option value="kn">ಕನ್ನಡ</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
