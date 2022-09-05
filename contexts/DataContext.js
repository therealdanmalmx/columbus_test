import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [pushData, setPushData] = useState(
    JSON.parse(localStorage.getItem("wish")) || []
  );

  const handleClick = (data) => {
    setPushData([...pushData, data]);
  };

  const handleClear = (index) => {
    setPushData((pushData) => pushData.filter((item, i) => i !== index));
    localStorage.removeItem("wish", index);
  };
  useEffect(() => {
    if (pushData !== []) {
      localStorage.setItem("wish", JSON.stringify(pushData));
    }
  }, [pushData]);

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
