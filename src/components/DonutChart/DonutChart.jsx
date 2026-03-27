import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { chartColors } from "../chartcolors/chartcolors";

export default function DonutChart({ data, dataKey, nameKey, height , width }) {

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
                  fill={chartColors[index % chartColors.length]}
                  />
              ))}
              </Pie>

              <Tooltip 
                contentStyle={{
                  backgroundColor:"#1e1e1e",
                  border: "1px solid #333",
                  borderRadius: 8
                }}
                labelStyle={{ color: "#aaa" }}
                itemStyle={{ color: "#fff" }}
              />
          </PieChart>
        </ResponsiveContainer>
  );
};