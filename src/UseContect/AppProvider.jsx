import { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";

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
  // Slide scrolling
  const [images, setImage] = useState([]);
  const FetchAPI = async () => {
    try {
      const res = await fetch("https://json-movie-api.onrender.com/movie", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setImage(data);
    } catch (e) {
      console.error("'Message: ", e);
    }
  };
  useEffect(() => {
    FetchAPI();
  }, []);
  // Carousel automatically run
  const [slide, setSlide] = useState([]);
  const FetchAPIS = async () => {
    try {
      const res = await fetch("https://json-movie-api.onrender.com/movie", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setSlide(data);
    } catch (e) {
      console.error("'Message: ", e);
    }
  };
  useEffect(() => {
    FetchAPIS();
  }, []);

  return (
    <AppProviders.Provider value={{ night, NightMode, DayMode, images, slide }}>
      {children}
    </AppProviders.Provider>
  );
};
export default AppProviders;
