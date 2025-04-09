import useChartData from "../CustomHooks/useChartData";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

function TopExpenses() {
  const chartData = useChartData([
    { name: "food", value: 0 },
    { name: "entertainment", value: 0 },
    { name: "travel", value: 0 },
  ]);

  const showSortedData = () => {
    return chartData.sort((a, b) => b.value - a.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Top Expenses</h2>
      <div style={{ height: "100px" }} onClick={showSortedData}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={showSortedData()} layout="vertical" barSize={30}>
            <XAxis type="number" hide />
            <YAxis type="category" width={120} dataKey="name" />
            <Bar dataKey="value" fill="#8784D2" />
            {/* <Tooltip/> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TopExpenses;
