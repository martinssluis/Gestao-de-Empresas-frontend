import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis,YAxis, Tooltip, ResponsiveContainer} from "recharts";

export default function ChartColumn({title, data, height, width, xKey,bars}){
    return(
        <Card>
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                    {title}
                </Typography>

                <ResponsiveContainer width={width} height={height}>
                    <BarChart data={data}>
                        <XAxis dataKey={xKey}/>
                        <YAxis/>
                        <Tooltip
                            contentStyle={{
                                backgroundColor:"#1e1e1e",
                                border: "1px solid #333",
                                borderRadius: 8
                            }}
                            labelStyle={{ color: "#aaa" }}
                            itemStyle={{ color: "#fff" }}
                        />
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                
                                <stop offset="0%" stopColor="#3a91d8" />
                                <stop offset="40%" stopColor="#0c71c4" />
                                <stop offset="100%" stopColor="#0d47a1" />

                            </linearGradient>
                        </defs>
                        {bars.map((bar,index)=>(
                            <Bar
                            index={index}
                            type="monotone"
                            dataKey={bar.dataKey}
                            stroke="#ffffff"
                            radius={[4, 4, 0 ,0]}
                            strokeWidth={1}
                            fill="url(#barGradient)"
                            />
                        ))}
                        
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}