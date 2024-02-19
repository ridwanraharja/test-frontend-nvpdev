import React from "react";
import { Pie as PieComponent } from "react-chartjs-2";

export default function Pie({ data, className }) {
  return <PieComponent data={data} className={className} />;
}
