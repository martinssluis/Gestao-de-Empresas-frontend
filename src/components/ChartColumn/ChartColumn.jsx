import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis,YAxis, Tooltip, ResponsiveContainer} from "recharts";

export default function ChartColumn({title, data, height = 300}){
    return(
        <Card>
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                    {title}
                </Typography>

                <ResponsiveContainer width="100%" height={height}>
                    <BarChart data={data}>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Bar
                            type="monotone"
                            dataKey="value"
                            stroke="#1976d2"
                            strokeWidth={2}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}