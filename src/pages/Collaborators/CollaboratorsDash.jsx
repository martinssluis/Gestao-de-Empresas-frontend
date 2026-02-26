import { useNavigate } from "react-router-dom"
import { Box, Button, Card, Grid } from "@mui/material"
import styles from './CollaboratorsDash.module.css'
import StatCard from "../../components/StatCard/StatCard"



export default function CollaboratorsDash(){
    const navigate = useNavigate()
    return(
        <Box component={'div'} className={styles.container}>
            <Grid className="main">
                <Grid item xs={12} md={2}>
                    <StatCard
                        
                    />
                </Grid>
                <Button onClick={() => navigate('/app/collaborators')}>
                    incluir colaborador
                </Button>
            </Grid>
        </Box>
    )
}