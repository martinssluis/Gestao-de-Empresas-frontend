import styles from './Financial.module.css';
import { Box,Typography,Card, Grid } from '@mui/material';
import DonutChart from '../../components/DonutChart/DonutChart';
import StatCard from '../../components/StatCard/StatCard';
import DataTable from '../../components/DataTable/DataTable';
import RankList from '../../components/RankList/RankList';
import Chart from '../../components/Chart/ChartCard';

export default function Financial() {
  const financialMock = [
    {
      id: 1,
      descricao: "Venda de notebook",
      categoria: "Vendas",
      tipo: "Receita",
      valor: 5500,
      status: "Pago",
      data: "2025-01-10"
    },
    {
      id: 2,
      descricao: "Compra de periféricos",
      categoria: "Compras",
      tipo: "Despesa",
      valor: 1200,
      status: "Pago",
      data: "2025-01-12"
    },
    {
      id: 3,
      descricao: "Assinatura software ERP",
      categoria: "Serviços",
      tipo: "Despesa",
      valor: 350,
      status: "Pago",
      data: "2025-01-15"
    },
    {
      id: 4,
      descricao: "Venda de monitores",
      categoria: "Vendas",
      tipo: "Receita",
      valor: 3200,
      status: "Pago",
      data: "2025-01-18"
    },
    {
      id: 5,
      descricao: "Conta de energia",
      categoria: "Infraestrutura",
      tipo: "Despesa",
      valor: 600,
      status: "Pendente",
      data: "2025-01-20"
    },
    {
      id: 6,
      descricao: "Venda de cadeiras gamer",
      categoria: "Vendas",
      tipo: "Receita",
      valor: 1800,
      status: "Pago",
      data: "2025-01-21"
    },
    {
      id: 7,
      descricao: "Marketing digital",
      categoria: "Marketing",
      tipo: "Despesa",
      valor: 900,
      status: "Pago",
      data: "2025-01-23"
    },
    {
      id: 8,
      descricao: "Venda de webcams",
      categoria: "Vendas",
      tipo: "Receita",
      valor: 950,
      status: "Pendente",
      data: "2025-01-25"
    }
  ];

 // variável para o lineChart const returnedValueChart = financialMock[0] || null

  const totalReceitas = financialMock
  .filter(item => item.tipo === "Receita")
  .reduce((acc, item) => acc + item.valor, 0);

  const totalDespesas = financialMock
    .filter(item => item.tipo === "Despesa")
    .reduce((acc, item) => acc + item.valor, 0);

  const saldo = totalReceitas - totalDespesas;

  const contasPendentes = financialMock
  .filter(item => item.status === "Pendente").length;

  const totalCategorias = new Set(
    financialMock.map(item => item.categoria)
  ).size;

  const chartData = [
  {
    name: "Receitas",
    value: financialMock
      .filter(item => item.tipo === "Receita")
      .reduce((acc, item) => acc + item.valor, 0)
  },
  {
    name: "Despesas",
    value: financialMock
      .filter(item => item.tipo === "Despesa")
      .reduce((acc, item) => acc + item.valor, 0)
  }
  ];

  const rankData = [
  { nome: "Vendas", valor: "R$ 11k", percentual: 80 },
  { nome: "Serviços", valor: "R$ 3k", percentual: 40 },
  { nome: "Marketing", valor: "R$ 2k", percentual: 30 },
  { nome: "Infra", valor: "R$ 1k", percentual: 20 }
  ];
  const columns = [
    { field: "descricao", headerName: "Descrição", flex: 1 },
    { field: "categoria", headerName: "Categoria", flex: 1 },
    { field: "tipo", headerName: "Tipo", flex: 1 },
    { field: "valor", headerName: "Valor", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "data", headerName: "Data", flex: 1 }
  ]
  return (
    <>
      <Box component="div" className={styles.containerFinancial}>
        <Typography variant='h3' className='h3' fontWeight={700} sx={{display: "flex", gap:1}}>
          Financeiro
        </Typography>
        <Grid container spacing={3} mt={2} className='main'>
          <Grid item xs={12} md={3}>
            <StatCard
              sx={{
                p:1
              }}
              title="Saldo da conta"
              value={`R$ ${saldo}`}
            >
            </StatCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <StatCard
              sx={{
                p:1
              }}
              title="Pendentes a pagar"
              value={contasPendentes}
            >
            </StatCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <StatCard
              sx={{
                p:1
              }}
              title="Categorias"
              value={totalCategorias}
            >
            </StatCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <StatCard
              sx={{
                p:1
              }}
              title="Despezas"
              value={`R$ ${totalDespesas}`}
            >
            </StatCard>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3} className={styles.statContainer}>
              <Grid item xs={12} md={3}>
                <Card sx={{borderRadius: 3,p:3, display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: "center"}}>
                  <DonutChart
                    title="Overview financeiro"
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    width="100%"
                    height={280}
                  />
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                  <Card sx={{ borderRadius: 4, p: 3 }}>
                    <Typography variant="h6">Evolução Financeira</Typography>

                    <Box mt={2}>
                        <Chart
                        height={190}
                        />
                    </Box>
                  </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                  <Card sx={{ borderRadius: 4, p: 3, height:333 }}>
                    <Typography variant="h6">Top Categorias</Typography>

                    <Box mt={2}>
                      <RankList data={rankData} />
                    </Box>
                  </Card>
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{
                width:"100%",
                borderRadius:4,
                p:3,
                alignItems:'center',
              }}
            >
              <Box display="flex" mb={2}>
                <Typography variant='h6'>
                  Movimentações
                </Typography>
              </Box>
              <DataTable
              rows={financialMock}
              columns={columns}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
