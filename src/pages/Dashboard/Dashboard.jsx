import { Box, Typography, Grid, TextField } from '@mui/material';
import styles from './Dashboard.module.css';
import StatCard from '../../components/StatCard/StatCard';
import Chart from '../../components/Chart/ChartCard';
import PopularList from '../../components/PopularList/PopularList';
import ChartColumn from '../../components/ChartColumn/ChartColumn';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  // ARRAYS PARA ALIMENTAR O DAHSBOARD
  // STATS ALIMENTAM OS CARDS
  const stats = [
    {title:'Colaboradores', value: 10},
    {title:'Pagamentos pendentes', value: 3 },
    {title:'Produtos', value: 300 },
    {title:'Total de vendas', value: 71800 }
  ]
  // SALES ALIMENTAM O LINE CHART
  const salesData =[
    { month: 'Jan', value: 4000 },
    { month: 'Fev', value: 3000 },
    { month: 'Mar', value: 5000 },
    { month: 'Abr', value: 2780 },
    { month: 'Mai', value: 1890 },
    { month: 'Jun', value: 2390 },
    { month: 'Jul', value: 4000 },
    { month: 'Ago', value: 3000 },
    { month: 'Set', value: 5000 },
    { month: 'Out', value: 2780 },
    { month: 'Nov', value: 1890 },
    { month: 'Dez', value: 2390 },
  ]
  // POPULAR ITEMS ALIMENTAM O CARD DE ITENS POPULARES
  const popularItems = [
  {
    id: 1,
    name: 'Produto A',
    subtitle: 'Categoria 1',
    history: [
      {month: 'Jan', value: 40},
      {month: 'Fev', value: 30},
      {month: 'Mar', value: 50}
    ]
  },
  {
    id: 2,
    name: 'Produto B',
    subtitle: 'Categoria 2',
    history: [
      {month: 'Jan', value: 50},
      {month: 'Fev', value: 80},
      {month: 'Mar', value: 70}
    ]
  },
  {
    id: 3,
    name: 'Produto C',
    subtitle: 'Categoria 3',
    history: [
      {month: 'Jan', value: 70},
      {month: 'Fev', value: 70},
      {month: 'Mar', value: 90}
    ]
  },
   {
    id: 4,
    name: 'Produto D',
    subtitle: 'Categoria 1',
    history: [
      {month: 'Jan', value: 70},
      {month: 'Fev', value: 30},
      {month: 'Mar', value: 20}
    ]
  },
  {
    id: 5,
    name: 'Produto E',
    subtitle: 'Categoria 2',
    history: [
      {month: 'Jan', value: 80},
      {month: 'Fev', value: 80},
      {month: 'Mar', value: 90}
    ]
  },
  {
    id: 6,
    name: 'Produto F',
    subtitle: 'Categoria 3',
    history: [
      {month: 'Jan', value: 20},
      {month: 'Fev', value: 90},
      {month: 'Mar', value: 10}
    ]
  }
];
  const [searchTerm, setSearchTerm] = useState('');
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = popularItems.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const firstMatch = popularItems.find((product)=> product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setSelectedProduct(firstMatch || null);
  }, [searchTerm]);


  return (
    <>
      <Box
        component={'div'}
        className={styles.containerDashboard}>
      <Typography
        variant='h4'
        className='h4'
        gutterBottom 
        sx={{mb: 3}}>Dashboard
      </Typography>

      <Grid
        container
        spacing={4}
        className='mainGrid'
      >
        {stats.map((item, index) => (
        <Grid 
         item
         md={2}
         key={index}
        >
          <StatCard
            title={item.title}
            value={item.value}
          />
        </Grid>
        ))}
        <Grid 
          container
          spacing={1}
          sx={{ mt: 2 }}>
         <Grid 
            item 
            xs={8} 
            md={4} 
            spacing={2}
         >
            {selectedProduct ? (
                <Chart
                  title={`Histórico de saída - ${selectedProduct.name}`}
                  data={selectedProduct.history}
                  height={200}
                />
              ) : (
                <Typography
                 color="text.secondary">
                  Nenhum produto encontrado
                </Typography>
              )}

            <TextField
              fullWidth
              label="Pesquisar produto"
              variant='outlined'
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <PopularList
              title="Itens populares"
              items={filteredProducts}
            />
         </Grid>
        <Grid 
          item
          xs={8} 
        >
          <ChartColumn
            title="Vendas nos últimos meses"
            data={salesData}
            height={560}
          />
        </Grid>
      </Grid>

      </Grid>
      </Box>
    </>
  );
}
