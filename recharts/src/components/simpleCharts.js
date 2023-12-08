import React from "react";
import * as LineGraphs from "./style";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

LineGraph.defaultProps = {
  commitData: [
    {
      name: "7월 1일",
      평균거래가: 0,
    },
    {
      name: "7월 5일",
      평균거래가: 2000,
    },
    {
      name: "7월 10일",
      평균거래가: 5000,
    },
    {
      name: "7월 15일",
      평균거래가: 4500,
    },
    {
      name: "7월 20일",
      평균거래가: 7000,
    },
    {
      name: "7월 25일",
      평균거래가: 0,
    },
    {
      name: "7월 30일",
      평균거래가: 0,
    },
  ],
};

export function LineGraph({ graphTitle, commitData }) {
  return (
    <LineGraphs.Container>
      <LineGraphs.Title>{graphTitle} 시세</LineGraphs.Title>
      <LineGraphs.Wrapper>
        {commitData && (
          <LineChart width={1060} height={280} data={commitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="평균거래가"
              stroke="#6ABD8C"
              activeDot={{ r: 2 }}
              isAnimationActive={false}
            />
          </LineChart>
        )}
      </LineGraphs.Wrapper>
    </LineGraphs.Container>
  );
}
