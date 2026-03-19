import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@mui/material";

const defaultColors = [
  "#4CAF50",
  "#2196F3",
  "#FF9800",
  "#F44336"
];

export default function DonutChart({ title, data, dataKey, nameKey, height , width, colors = defaultColors }) {

  return (
    <Card>
      <h2>{title}</h2>
        <ResponsiveContainer width={width} height={height}>
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
    </Card>
  );
};