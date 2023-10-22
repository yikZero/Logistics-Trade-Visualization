import Title from "../components/atom/Title";
import SpecializedBusiness from "../components/SpecializedBusiness";
import BasicBar from "../components/BasicBar";
import NightingaleChart from "../components/NightingaleChart";

function EChartsSideBar() {

  return (
    <>
      <section className="absolute right-6 top-6 w-[480px] p-6 flex flex-col gap-3">
        <Title title="专项业务"/>
        <SpecializedBusiness />
        <Title title="产品订购"/>
        <BasicBar />
        <Title title="电子合同"/>
        <NightingaleChart />
      </section>
    </>
  );
}

export default EChartsSideBar;
