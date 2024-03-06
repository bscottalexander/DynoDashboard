import * as React from "react";
import Chart from "react-apexcharts";



function PieGraph(props) {
  const { className, title, labels, series } = props;
  const options = {
    labels,
    title: {
      text: title,
      align: "center",
    },
  };
  return <Chart className={className} options={options} series={series} type="pie" width="100%"  />;
}

export default PieGraph;
