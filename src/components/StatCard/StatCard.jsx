import { Box, Card,CardContent, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import TrendingDownIcon from "@mui/icons-material/TrendingDown"

export default function StatCard({title, value,sx, icon, trend,...props}){
    return (
        <Card
        {...props}
        sx={sx}
        >
            <CardContent>
                <Box
                    sx={{
                        gap:1,
                        display: 'flex'
                    }}
                >
                    {icon} 
                <Typography
                    variant="subtitle"
                    color={"text.secondary"}
                    gutterBottom
                >
                {title}
                </Typography>
                </Box>
                <Typography 
                    variant="h5">
                    {value}
                </Typography>

                {trend && (
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: trend.positive ? "success.main" : "error.main",
                    mt: 0.5
                    }}
                >
                    {trend.positive
                    ? <TrendingUpIcon fontSize="small"/>
                    : <TrendingDownIcon fontSize="small"/>}

                    <Typography variant="caption">
                    {trend.value}
                    </Typography>
                </Box>
                )}
            </CardContent>
        </Card>
    )
}