import Title from "../components/atom/Title";
import SpecializedBusiness from "../components/SpecializedBusiness";

function EChartsSideBar() {

  return (
    <>
      <section className="absolute right-6 top-6 w-[480px] p-6 flex flex-col gap-4">
        <Title title="专项业务"/>
        <SpecializedBusiness />
      </section>
    </>
  );
}

export default EChartsSideBar;
