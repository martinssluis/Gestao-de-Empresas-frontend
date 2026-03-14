import styles from "./StockDash.module.css"
import { Box, Button, Grid, Typography, Card, Input  } from "@mui/material"
import DataTable from "../../components/DataTable/DataTable"

export default function StockDash(){
    return(
        <Box
            component={'div'} className={styles.containerSd}
        >
            <Typography variant="h3">
                Estoque
            </Typography>

        </Box>
    );  
}