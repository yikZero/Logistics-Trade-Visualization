import EChartsSideBar from "./pages/EChartsSideBar";
import Earth from "./components/Earth";
import Background from "./components/Background";
import StarChainDialog from "./components/StarChainDialog";
import { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Background />
      <Earth />
      <EChartsSideBar />
      <StarChainDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default App;
