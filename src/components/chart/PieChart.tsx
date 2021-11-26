import { Chart } from "react-google-charts";
import { chartColorBlue, chartColorYellow, chartTextColor } from "../../theme/colors"

const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
      {
        color: chartColorBlue
      },
      {
        color: chartColorYellow
      }

    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: chartTextColor,
        fontSize: 14
      }
    },
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

export default function PieChart() {

    return (
    <div className="App">
        <Chart
          chartType="PieChart"
          data={[["Title", "Supply"], ["Your Tokens", 64000000], ["Other Tokens", 36000000]]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"300px"}
          legend_toggle
        />
      </div>
    )
}
