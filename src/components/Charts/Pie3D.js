import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const chartConfigs = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "500",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        centerLabel: "Revenue from $label: $value",
        decimals: "0",
        theme: "fusion",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default chartConfigs;
