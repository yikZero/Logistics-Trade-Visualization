import ReactECharts from "echarts-for-react";

function ElectronicContractChart() {
  const bar = function () {
    const option = {
      legend: {
        orient: "vertical",
        align: "left", // 图例文本位置
        y: "center",
        x: "right",
      },
      backgroundColor: "rgba(0, 0, 0, 0)",
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true,
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [50, 100],
          center: ["40%", "50%"],
          roseType: "area",
          data: [
            { value: 50, name: "已完成" },
            { value: 25, name: "待审核" },
            { value: 13, name: "签署中" },
            { value: 7, name: "未完成" },
          ],
        },
      ],
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

export default ElectronicContractChart;
