import { useEffect, useState } from "react";
import { DataProvider } from "../contexts/DataContext";

function Layout({ children }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <DataProvider>
        <main>{children}</main>
      </DataProvider>
    );
  }
}

export default Layout;
