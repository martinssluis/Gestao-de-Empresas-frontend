import { Box, Typography, Grid } from '@mui/material';
import styles from './Dashboard.module.css';
import StatCard from '../../components/StatCard/StatCard';
import Chart from '../../components/Chart/ChartCard';
import PopularList from '../../components/PopularList/PopularList';

export default function Dashboard() {
  const stats = [
    {title:'Colaboradores', value: 10},
    {title:'Pagamentos pendentes', value: 3 },
    {title:'Produtos', value: 300 },
    {title:'Total de vendas', value: 71800 }
  ]
  const salesData =[
    { name: 'Jan', value: 4000 },
    { name: 'Fev', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Abr', value: 2780 },
    { name: 'Mai', value: 1890 },
    { name: 'Jun', value: 2390 },
  ]
  const popularItems = [
  {
    name: 'Produto A',
    subtitle: 'Categoria 1',
    value: 'R$ 1.890'
  },
  {
    name: 'Produto B',
    subtitle: 'Categoria 2',
    value: 'R$ 1.230'
  },
  {
    name: 'Produto C',
    subtitle: 'Categoria 3',
    value: 'R$ 980'
  }
];

  
  return (
    <>
      <Box component={'div'}  className={styles.containerDashboard}>
        <Typography variant='h4' className='h4' gutterBottom sx={{mb: 7}}>Dashboard</Typography>

      <Grid container spacing={3} className='mainGrid'>
        {stats.map((item, index) => (
        <Grid item xs={12} md={2} key={index}>
          <StatCard
            title={item.title}
            value={item.value}
          />
        </Grid>
        ))}

      </Grid>
      <Grid container spacing={1} sx={{ mt: 3}}>
        <Grid item xs={8}>
          <Chart
          title="Vendas nos últimos meses"
          data={salesData}
          />
        </Grid>
        <Grid item xs={12} md={4}>
            <PopularList
            title="Itens populares"
            items={popularItems}
            />
         </Grid>
      </Grid>
      
      </Box>
    </>
  );
}
