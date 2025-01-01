import { createContext, useState } from "react";

const AppProviders = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [night, setNight] = useState(false);

  const NightMode = () => {
    setNight(true);
  };
  const DayMode = () => {
    setNight(false);
  };

  return (
    <AppProviders.Provider value={{ night, NightMode, DayMode }}>
      {children}
    </AppProviders.Provider>
  );
};
export default AppProviders;
