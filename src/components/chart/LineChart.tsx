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

export const data = [
  ["Date / Time", "Price"],
  ["09:40 AM", 22.4],
  ["09:45 AM", 13.5],
  ["09:49 AM", 19.9],
  ["10:14 AM", 25],
  ["10:44 AM", 21],
  ["10:59 AM", 28],
  ["11:36 AM", 14],
];


export default function PieChart() {

    return (
    <div className="App">
       <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={data}
        options={chartOptions}
      />
      </div>
    )
}
