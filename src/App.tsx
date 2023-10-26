import EChartsSideBar from "./pages/EChartsSideBar";
import Earth from "./components/Earth";
import Background from "./components/Background";
import { useState } from "react";
import CountryContext from "./Context";

function App() {
  const [selectedCountry, setCountry] = useState<string | null>(null);

  return (
    <>
      <CountryContext.Provider value={{ selectedCountry, setCountry }}>
        <Background />
        <Earth />
        <EChartsSideBar />
      </CountryContext.Provider>
    </>
  );
}

export default App;
