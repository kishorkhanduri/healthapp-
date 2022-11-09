import React from "react";
import '../Graph/Barchart.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Oct 2019",
    uv: 4000,
    pv: 2400,
    amt: 1500,
  },
  {
    name: "Nov 2019",
    uv: 3000,
    pv: 1398,
    amt: 3000,
  },
  {
    name: "Dec 2019",
    uv: 2700,
    pv: 1300,
    amt: 1400,
  },
  {
    name: "Jan 2020",
    uv: 3000,
    pv: 1700,
    amt: 1300,
  },
  {
    name: "Feb 2020",
    uv: 4300,
    pv: 500,
    amt: 3800,
  },
  {
    name: "March 2020",
    uv: 2700,
    pv: 800,
    amt: 1900,
  },
];

export default function App() {
  return (
    <div>
      <div>
        <h2 className="c-heading">Outpatients vs. Inpatients Trend</h2>
        <hr/>
        <BarChart
          width={400}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>

      </div>
    </div>
  );
}
