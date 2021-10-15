import "./index.css";
import ChartBar from "./ChartBar";

export default function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximun = Math.max(...dataPointsValues)
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
