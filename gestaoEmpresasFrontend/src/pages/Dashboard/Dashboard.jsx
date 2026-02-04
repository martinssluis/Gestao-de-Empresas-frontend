import { Box, Typography, Grid } from '@mui/material';
import styles from './Dashboard.module.css';
import StatCard from '../../components/StatCard/StatCard';
import Chart from '../../components/Chart/ChartCard';

export default function Dashboard() {
  const stats = [
    {title:'Colaboradores', value: 10},
    {title:'Total em pagamentos pendentes', value: 3 },
    {title:'Produtos', value: 300 }
  ]
  const salesData =[
    { name: 'Jan', value: 4000 },
    { name: 'Fev', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Abr', value: 2780 },
    { name: 'Mai', value: 1890 },
    { name: 'Jun', value: 2390 },
  ]
  
  return (
    <>
      <Box component={'div'}  className={styles.containerDashboard}>
        <Typography variant='h4' className='h4' gutterBottom sx={{mb: 7}}>Dashboard</Typography>

      <Grid container spacing={5} className='mainGrid'>
        {stats.map((item, index) => (
        <Grid item xs={12} md={2} key={index}>
          <StatCard
            title={item.title}
            value={item.value}
          />
        </Grid>
        ))}

      </Grid>
      <Grid container spacing={2} sx={{ mt: 3}}>
        <Grid item xs={12}>
          <Chart
          title="Vendas nos últimos meses"
          data={salesData}
          />
        </Grid>
      </Grid>
      </Box>
    </>
  );
}
