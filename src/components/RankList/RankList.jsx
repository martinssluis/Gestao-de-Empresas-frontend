import { Box, Typography, LinearProgress } from "@mui/material";

export default function RankList({ data }) {
  return (
    <Box>
      {data.map((item, index) => (
        <Box key={index} mb={2}>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2">
              {item.nome}
            </Typography>

            <Typography variant="body2">
              {item.valor}
            </Typography>
          </Box>

          <LinearProgress
            variant="determinate"
            value={item.percentual}
            sx={{
              height: 6,
              borderRadius: 3,
              mt: 0.5
            }}
          />

        </Box>
      ))}
    </Box>
  );
}