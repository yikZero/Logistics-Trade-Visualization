import EChartsDemo from "../components/EChartsDemo";

function EChartsSideBar() {

  return (
    <>
      <section className="absolute right-6 top-6 h-full w-96 p-6 flex flex-col gap-8 ">
        <EChartsDemo />
        <EChartsDemo />
      </section>
    </>
  );
}

export default EChartsSideBar;
