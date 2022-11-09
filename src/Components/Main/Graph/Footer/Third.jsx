import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";
const data = [
  { data: 200 },
  {
    data: 400,
  },
  {
    data: 700,
  },
  {
    data: 400,
  },
  {
    data: 800,
  },
  {
    data: 300,
  },
  {
    data: 800,
  },
  {
    data: 600,
  },
  {
    data: 300,
  },
  {
    data: 580,
  },
  {
    data: 780,
  },
  {
    data: 680,
  },
  {
    data: 500,
  },
  {
    data: 300,
  },
  {
    data: 900,
  },
  {
    data: 700,
  },
  {
    data: 500,
  },
  {
    data: 300,
  },
  {
    data: 100,
  },
  {
    data: 90,
  },
  {
    data: 300,
  },
  {
    data: 800,
  },
  {
    data: 600,
  },
  {
    data: 300,
  },
  {
    data: 780,
  },
  {
    data: 500,
  },
  {
    data: 300,
  },
  {
    data: 500,
  },
  {
    data: 700,
  },
  {
    data: 100,
  },
  {
    data: 300,
  },
  {
    data: 500,
  }
];
export default function Earnings() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>3,240</h5>
          <h1>Patients this month</h1>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="10%" height="50%">
          <AreaChart
            width={100}
            height={100}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="white"
              fill=""
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
    }
  }
  .chart {
    height: 40%;
   
}`;