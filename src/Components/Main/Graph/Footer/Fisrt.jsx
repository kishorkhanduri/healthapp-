import React, { PureComponent } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
   {
    uv: 50,
    pv: 30,
    amt: 20,
  },
  {
    name: '7am',
    uv: 150,
    pv: 70,
    amt: 80,
  },
  {
    name: '8am',
    uv: 150,
    pv: 50,
    amt: 100,
  },
  {
    name: '9am',
    uv: 150,
    pv: 80,
    amt: 70,
  },
  {
    name: '10am',
    uv: 150,
    pv: 50,
    amt: 100,
  },
  {
    name: '11am',
    uv: 150,
    pv: 10,
    amt: 140,
  },
  {
    name: '12am',
    uv: 150,
    pv: 70,
    amt: 80,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <div style={{ width: '100%' }}>
        <h4>A demo of synchronized AreaCharts</h4>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={300}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
