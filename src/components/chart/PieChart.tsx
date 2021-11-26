import { Chart } from "react-google-charts";
import { chartColorOrange, chartColorYellow, chartTextColor } from "../../theme/colors"

const pieOptions = {
    title: "",
    slices: [
      {
        color: chartColorOrange
      },
      {
        color: chartColorYellow
      }
    ],
    legend: {
      position: "right",
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
      height: "100%"
    },
    fontName: "Roboto"
};

export default function PieChart(props: any) {
  const { chartData, chartId } = props;
  console.log("chartData ",chartData, " chartId ",chartId)
    return (
    <div className="App">
        <Chart
          chartType="PieChart"
          data={chartData}
          options={pieOptions}
          graph_id={`PieChart${chartId}`}
          width={"100%"}
          height={"100%"}
          legend_toggle
        />
      </div>
    )
}
