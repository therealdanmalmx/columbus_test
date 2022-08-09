import { createContext, useState, useE } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [pushData, setPushData] = useState([]);

  const handleClick = (data) => {
    setPushData([...pushData, data]);
  };

  const handleClear = (index) => {
    setPushData((pushData) => pushData.filter((item, i) => i !== index));
  };

  return (
    <DataContext.Provider
      value={{
        pushData,
        handleClear,
        handleClick,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
