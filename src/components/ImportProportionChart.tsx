import ReactECharts from "echarts-for-react";
import { useContext } from "react";
import CountryContext from "../Context";

function ImportProportionChart() {

  const countryContext = useContext(CountryContext);
  const handleChartClick = (params: any) => {
    if (countryContext !== null) {
      // const { setCountry } = countryContext;
      const name = params.name;
      console.log(name);
    }
  };

  const bar = function () {
    const option = {
      tooltip: {
        trigger: "item",
        formatter: function (params: any) {
          return `${params.name}: ${params.value} 亿美元 (${params.percent}%)`;
        },
        backgroundColor: "rgba(0,0,0,0.9)",
        textStyle: {
          color: "#fff",
        },
      },
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
          name: "上合组织成员国进口总额占比",
          type: "pie",
          avoidLabelOverlap: false,
          radius: [50, 100],
          center: ["35%", "50%"],
          label: {
            show: false,
            position: "center",
          },
          data: [
            { value: 715.59, name: "俄罗斯" },
            { value: 109.14, name: "印度" },
            { value: 89.29, name: "哈萨克斯坦" },
            { value: 25.45, name: "伊朗" },
            { value: 18.8, name: "巴基斯坦" },
            { value: 8.22, name: "乌兹别克斯坦" },
            { value: 1.74, name: "塔吉克斯坦" },
            { value: 0.31, name: "吉尔吉斯斯坦" },
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
        onEvents={{ 'click': handleChartClick }}
      />
    </>
  );
}

export default ImportProportionChart;
