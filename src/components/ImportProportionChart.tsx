import ReactECharts from "echarts-for-react";

function ImportProportionChart() {
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
            {
              value: 715.59,
              name: "俄罗斯",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#169BFA" },
                    { offset: 1, color: "#5BCEFD" },
                  ],
                },
              },
            },
            {
              value: 109.14,
              name: "印度",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#21C5DB" },
                    { offset: 1, color: "#5DF3EF" },
                  ],
                },
              },
            },
            {
              value: 89.29,
              name: "哈萨克斯坦",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#31CF9A" },
                    { offset: 1, color: "#99F1BE" },
                  ],
                },
              },
            },
            {
              value: 25.45,
              name: "伊朗",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#FFB95B" },
                    { offset: 1, color: "#FFEECE" },
                  ],
                },
              },
            },
            {
              value: 18.8,
              name: "巴基斯坦",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#FF956F" },
                    { offset: 1, color: "#FFB8A0" },
                  ],
                },
              },
            },
            {
              value: 8.22,
              name: "乌兹别克斯坦",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#F3665F" },
                    { offset: 1, color: "#FF9B9B" },
                  ],
                },
              },
            },
            {
              value: 1.74,
              name: "塔吉克斯坦",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#627585" },
                    { offset: 1, color: "#DAE0E5" },
                  ],
                },
              },
            },
            {
              value: 0.31,
              name: "吉尔吉斯斯坦",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#9D9D9D" },
                    { offset: 1, color: "#D8D8D8" },
                  ],
                },
              },
            },
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

export default ImportProportionChart;
