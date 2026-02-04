import { Card,CardContent,Typography } from "@mui/material";
import { Line, LineChart, XAxis,YAxis,Tooltip,ResponsiveContainer} from 'recharts'

export default function Chart({title, data}){
    return(
        <Card>
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                    {title}
                </Typography>

                <ResponsiveContainer width="100%" height="300">
                    <LineChart data={data}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#1976d2"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}