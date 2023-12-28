// App.js
import React from 'react';
import useRtl from './useRtl'; // Import the custom hook
import ExampleComponent from './ExampleComponent';
import LanguageSwitcher from './LanguageSwitcher';

const App = () => {
  const isRTL = useRtl();

  return (
    <div className={isRTL ? 'rtl-content' : ''}>
      <h1>Internalization</h1>
      <LanguageSwitcher />
      <ExampleComponent />
      {/* Include other components as needed */}
    </div>
  );
};

export default App;
