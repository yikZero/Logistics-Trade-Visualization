import ReactECharts from "echarts-for-react";
import Title from "./atom/Title";

function EChartsDemo() {
  const bar = function () {
    const option = {
      tooltip: {},
      darkMode: true,
      backgroundColor: "rgba(0, 0, 0, 0)",
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    return option;
  };
  return (
    <>
      <Title title="Hello,World!"/>
      <ReactECharts className="w-full" option={bar()} theme={"dark"} />
    </>
  );
}

export default EChartsDemo;
