import { Card,CardContent, Typography } from "@mui/material";

export default function StatCard({title, value,sx}){
    return (
        <Card
        sx={sx}
        >
            <CardContent>
                <Typography
                    variant="subtitle"
                    color={"text.secondary"}
                    gutterBottom
                >
                {title}
                </Typography>
                
                <Typography 
                    variant="h5">
                    {value}
                </Typography>
            </CardContent>
        </Card>
    )
}