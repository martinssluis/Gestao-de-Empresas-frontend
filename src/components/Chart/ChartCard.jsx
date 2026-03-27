import { Card,CardContent,Typography } from "@mui/material";
import { Line, LineChart, XAxis,YAxis,Tooltip,ResponsiveContainer} from 'recharts'

export default function Chart({title, data, height = 300, xKey,lines}){
    return(
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                    {title}
                </Typography>

                <ResponsiveContainer width="100%" height={height}>
                    <LineChart data={data}>
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
                        {lines.map((line,index)=>(                        <Line
                                index={index}
                                type="monotone"
                                dataKey={line.dataKey}
                                stroke="#1976d2"
                                strokeWidth={3}
                            />
                        ))}
                        <Line
                            type="monotone"
                            dataKey="value2"
                            stroke="#54d219"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
    )
}