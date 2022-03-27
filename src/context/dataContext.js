import { createContext, useContext, useEffect, useState } from "react";
import { useComponents } from "../context";
import { getVideosService } from "../services";

const DataContext = createContext({
  videosData: [],
  setVideosData: () => {},
});

const DataProvider = ({ children }) => {
  const [videosData, setVideosData] = useState([]);
  const { componentsDispatch } = useComponents();

  useEffect(() => {
    componentsDispatch({
      type: "LOADER",
      payload: {
        active: true,
        title: "I'm Working",
      },
    });
    (async () => {
      try {
        const response = await getVideosService();
        setVideosData(response.data.videos);
        componentsDispatch({
          type: "LOADER",
          payload: {
            active: false,
            title: "",
          },
        });
      } catch (error) {
        componentsDispatch({
          type: "LOADER",
          payload: {
            active: false,
            title: "",
          },
        });
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
