import React from 'react'
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import { chartTextColor } from "../../theme/colors"

const chartOptions = {
  title: "",
  legend: { position: "none" },
  hAxis: { textPosition: 'none' },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};

export default function LineChart(props: any) {
  const { chartData } = props;
  console.log("chartData ", chartData)
  return (
    <div className="App">
      <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={chartData}
        options={chartOptions}
      />
    </div>
  )
}
