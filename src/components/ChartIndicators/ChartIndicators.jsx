import { Box, Typography } from "@mui/material";

export default function ChartIndicators({data}){
    const total = data.reduce((acc, item) => acc + item.value, 0);

    return(
        <Box display="flex" flexDirection="column" gap={2}>
            
            {data.map((item, index)=>{
                const percentage = ((item.value / total) * 100).toFixed(1)
                return(
                    <Box key={index} display="flex" alignItems="center" gap={1}>   
                        <Box
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: item.color
                            }}
                        /> 
                        <Typography variant="body2">
                            {item.name}:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {percentage}%
                        </Typography>
                    </Box>
                 );
            })}
        </Box>
    );
}
{/*

export default function ChartLegend({ data }) {
  

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {data.map((item, index) => {
        const percentage = ((item.value / total) * 100).toFixed(1);

        return (
          <Box key={index} display="flex" alignItems="center" gap={1}>
            
            {/* bolinha colorida }
            <Box
              
            />

            {/* label }
            <Typography variant="body2" sx={{ flex: 1 }}>
              {item.name}
            </Typography>

            {/* valor }
            <Typography variant="body2">
              R$ {item.value}
            </Typography>

            {/* percentual }
            <Typography variant="body2" color="text.secondary">
              {percentage}%
            </Typography>

          </Box>
        );
      })}
    </Box>
  );
}
    
    */}