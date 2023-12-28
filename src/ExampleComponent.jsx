// ExampleComponent.js
import React from "react";
import { useTranslation } from "react-i18next";

const ExampleComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("greeting")}</p>
    </div>
  );
};

export default ExampleComponent;
