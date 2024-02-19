import React from "react";
import { Line as LineComponent } from "react-chartjs-2";

export default function Line({ options, data, className }) {
  return <LineComponent options={options} data={data} className={className} />;
}
