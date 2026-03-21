import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";

const defaultColors = [
  "#4CAF50",
  "#2196F3",
  "#FF9800",
  "#F44336"
];

export default function DonutChart({ data, dataKey, nameKey, height , width, colors = defaultColors }) {

  return (
        <ResponsiveContainer  width={width} height={height}>
          <PieChart>
              <Pie
              data={data}
              dataKey={dataKey}
              nameKey={nameKey}
              innerRadius="50%"
              outerRadius="90%"
              paddingAngle={2}
              >
              {data.map((entry, index) => (
                  <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                  />
              ))}
              </Pie>

              <Tooltip />
          </PieChart>
        </ResponsiveContainer>
  );
};