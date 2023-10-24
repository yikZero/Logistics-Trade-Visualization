import ReactECharts from "echarts-for-react";

function BasicBar() {
  const bar = function () {
    const option = {
      backgroundColor: "rgba(0, 0, 0, 0)",
      xAxis: {
        data: ["欧顺航", "贷代2", "贷代3", "贷代4", "贷代5"],
      },
      yAxis: {
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
          },
        },
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: [310, 324, 298, 248, 274],
        },
      ],
      grid: {
        top: 8,
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true,
      },
    };
    return option;
  };
  return (
    <>
      <ReactECharts
        className="w-full h-full"
        style={{ height: "240px" }}
        option={bar()}
        theme={"dark"}
      />
    </>
  );
}

export default BasicBar;
