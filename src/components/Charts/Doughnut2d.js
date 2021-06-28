import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const chartConfigs = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataEmptyMessage:"No Stars",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        decimals: "0",
        theme: "fusion",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default chartConfigs;
