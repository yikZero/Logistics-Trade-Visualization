import ReactECharts from "echarts-for-react";

function ProductOrderingBar() {
  const bar = function () {
    const option = {
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(0,0,0,0.9)",
        textStyle: {
          color: "#fff",
        },
      },
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
          data: [184, 324, 298, 248, 274],
        },
      ],
      grid: {
        top: 8,
        bottom: 0,
        left: 8,
        right: 8,
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

export default ProductOrderingBar;
