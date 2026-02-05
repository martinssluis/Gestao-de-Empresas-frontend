import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

export default function PopularList({title, items}){
    return(
        <Card sx={{height:'100%'}}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>

                {items.map((item, index)=>(
                    <Box key={index}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                py: 1
                            }}
                        >
                            <Box>
                                <Typography variant="subtitle2">
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    {item.subtitle}
                                </Typography>
                            </Box>
                            <Typography variant="subtitle2">
                                {item.value}
                            </Typography>
                        </Box>
                        {index < items.length - 1 && <Divider/>}
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}