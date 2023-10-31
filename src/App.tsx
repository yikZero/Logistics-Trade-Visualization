import EChartsSideBar from "./pages/EChartsSideBar";
import Earth from "./components/Earth";
import Background from "./components/Background";
import StarChainDialog from "./components/StarChainDialog";
import StarChainDialog2 from "./components/StarChainDialog2";
import HeadTitle from "./components/HeadTitle";

function App() {

  return (
    <>
      <Background />
      <HeadTitle title="青岛上合现代物流发展有限公司" />
      <Earth />
      <EChartsSideBar />
      <StarChainDialog />
      <StarChainDialog2 />
    </>
  );
}

export default App;
