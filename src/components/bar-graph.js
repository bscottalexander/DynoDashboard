import * as React from "react";
import Chart from "react-apexcharts";

function BarGraph(props) {
  const { className, title, categories, series } = props;
  const options = {
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: title,
      align: "center",
    },
    xaxis: {
      categories,
    },
  };
  return <Chart className={className} options={options} series={series} type="bar" width="100%" />;
}

export default BarGraph;
