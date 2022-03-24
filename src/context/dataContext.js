import { createContext, useContext, useEffect, useState } from "react";
import { getVideosService } from "../services";

const DataContext = createContext({
  videosData: [],
  setVideosData: () => {},
});

const DataProvider = ({ children }) => {
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getVideosService();
        setVideosData(response.data.videos);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ videosData, setVideosData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
