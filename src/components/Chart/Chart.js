import React from "react";
import ChartBar from "./ChartBar";
import "./css/Chart.css";

const Chart = (props) => {
  const dataPointValues = props.items.map(datapoint => datapoint.value);
  const maxDataPoint = Math.max(...dataPointValues);
  console.log(props.items);
  return (
    <div className="chart">
      {props.items.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={maxDataPoint}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;