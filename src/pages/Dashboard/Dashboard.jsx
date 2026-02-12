import { Box, Typography, Grid, TextField } from '@mui/material';
import styles from './Dashboard.module.css';
import StatCard from '../../components/StatCard/StatCard';
import Chart from '../../components/Chart/ChartCard';
import PopularList from '../../components/PopularList/PopularList';
import ChartColumn from '../../components/ChartColumn/ChartColumn';
import { useState } from 'react';
import { useI18n } from '../../i18n/useI18n';

export default function Dashboard() {
  const { t } = useI18n();

  const monthLabels = {
    jan: t('common.months.jan'),
    feb: t('common.months.feb'),
    mar: t('common.months.mar'),
    apr: t('common.months.apr'),
    may: t('common.months.may'),
    jun: t('common.months.jun'),
    jul: t('common.months.jul'),
    aug: t('common.months.aug'),
    sep: t('common.months.sep'),
    oct: t('common.months.oct'),
    nov: t('common.months.nov'),
    dec: t('common.months.dec'),
  };

  // ARRAYS PARA ALIMENTAR O DAHSBOARD
  // STATS ALIMENTAM OS CARDS
  const stats = [
    { title: t('pages.dashboard.stats.collaborators'), value: 10 },
    { title: t('pages.dashboard.stats.pendingPayments'), value: 3 },
    { title: t('pages.dashboard.stats.products'), value: 300 },
    { title: t('pages.dashboard.stats.totalSales'), value: 71800 },
  ];
  // SALES ALIMENTAM O LINE CHART
  const salesData =[
    { month: monthLabels.jan, value: 4000 },
    { month: monthLabels.feb, value: 3000 },
    { month: monthLabels.mar, value: 5000 },
    { month: monthLabels.apr, value: 2780 },
    { month: monthLabels.may, value: 1890 },
    { month: monthLabels.jun, value: 2390 },
    { month: monthLabels.jul, value: 4000 },
    { month: monthLabels.aug, value: 3000 },
    { month: monthLabels.sep, value: 5000 },
    { month: monthLabels.oct, value: 2780 },
    { month: monthLabels.nov, value: 1890 },
    { month: monthLabels.dec, value: 2390 },
  ];
  // POPULAR ITEMS ALIMENTAM O CARD DE ITENS POPULARES
  const popularItems = [
  {
    id: 1,
    name: t('pages.dashboard.products.a'),
    subtitle: t('pages.dashboard.categories.one'),
    history: [
      { month: monthLabels.jan, value: 40 },
      { month: monthLabels.feb, value: 30 },
      { month: monthLabels.mar, value: 50 },
    ],
  },
  {
    id: 2,
    name: t('pages.dashboard.products.b'),
    subtitle: t('pages.dashboard.categories.two'),
    history: [
      { month: monthLabels.jan, value: 50 },
      { month: monthLabels.feb, value: 80 },
      { month: monthLabels.mar, value: 70 },
    ],
  },
  {
    id: 3,
    name: t('pages.dashboard.products.c'),
    subtitle: t('pages.dashboard.categories.three'),
    history: [
      { month: monthLabels.jan, value: 70 },
      { month: monthLabels.feb, value: 70 },
      { month: monthLabels.mar, value: 90 },
    ],
  },
   {
    id: 4,
    name: t('pages.dashboard.products.d'),
    subtitle: t('pages.dashboard.categories.one'),
    history: [
      { month: monthLabels.jan, value: 70 },
      { month: monthLabels.feb, value: 30 },
      { month: monthLabels.mar, value: 20 },
    ],
  },
  {
    id: 5,
    name: t('pages.dashboard.products.e'),
    subtitle: t('pages.dashboard.categories.two'),
    history: [
      { month: monthLabels.jan, value: 80 },
      { month: monthLabels.feb, value: 80 },
      { month: monthLabels.mar, value: 90 },
    ],
  },
  {
    id: 6,
    name: t('pages.dashboard.products.f'),
    subtitle: t('pages.dashboard.categories.three'),
    history: [
      { month: monthLabels.jan, value: 20 },
      { month: monthLabels.feb, value: 90 },
      { month: monthLabels.mar, value: 10 },
    ],
  },
  ];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = popularItems.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const selectedProduct = filteredProducts[0] || null;


  return (
    <>
      <Box component={'div'}  className={styles.containerDashboard}>
        <Typography variant='h4' className='h4' gutterBottom sx={{mb: 7}}>
          {t('pages.dashboard.title')}
        </Typography>

      <Grid container spacing={2} className='mainGrid'>
        {stats.map((item, index) => (
        <Grid item xs={12} md={2} key={index}>
          <StatCard
            title={item.title}
            value={item.value}
          />
        </Grid>
        ))}
        <Grid container spacing={1} sx={{ mt: 2}}>
         <Grid item xs={8} md={4} spacing={2}>
            {selectedProduct ? (
                <Chart
                  title={`${t('pages.dashboard.outputHistory')} - ${selectedProduct.name}`}
                  data={selectedProduct.history}
                />
              ) : (
                <Typography color="text.secondary">
                  {t('pages.dashboard.noProductFound')}
                </Typography>
              )}

            <TextField
              fullWidth
              label={t('pages.dashboard.searchProduct')}
              variant='outlined'
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}
              sx={{mb: 2}}
            />
            <PopularList
            title={t('pages.dashboard.popularItems')}
            items={filteredProducts}
            />
         </Grid>
        <Grid item xs={8}>
          <ChartColumn
          title={t('pages.dashboard.salesLastMonths')}
          data={salesData}
          />
        </Grid>
      </Grid>

      </Grid>
      </Box>
    </>
  );
}
