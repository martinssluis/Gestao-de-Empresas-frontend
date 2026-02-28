import { useNavigate } from "react-router-dom"
import { Box, Button, Grid, Table, Typography, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import styles from './CollaboratorsDash.module.css'
import StatCard from "../../components/StatCard/StatCard"
import DataTable from "../../components/DataTable/DataTable"

const colaboradoresMock = [
  { id: 1, nome: "João", cargo: "Dev", departamento: "TI", salario: 5500, status: "Ativo", admissao: "2023-03-15" },
  { id: 2, nome: "Maria", cargo: "Financeiro", departamento: "Financeiro", salario: 6200, status: "Ativo", admissao: "2022-08-10" },
  { id: 3, nome: "Carlos", cargo: "Gerente", departamento: "Logística", salario: 7000, status: "Inativo", admissao: "2021-01-20" },
  { id: 4, nome: "Fernanda", cargo: "UX", departamento: "Produto", salario: 5800, status: "Ativo", admissao: "2024-02-01" },
  { id: 5, nome: "Lucas", cargo: "Dev", departamento: "TI", salario: 6000, status: "Ativo", admissao: "2023-07-12" },
  { id: 6, nome: "Ana", cargo: "Dev", departamento: "TI", salario: 5800, status: "Ativo", admissao: "2023-09-05" }
];

const totalColaboradores = colaboradoresMock.length;

const totalAtivos = colaboradoresMock.filter(c => c.status === "Ativo").length;

const mediaSalarial =
  colaboradoresMock.reduce((acc, c) => acc + c.salario, 0) / totalColaboradores;

const contratacoesPorAno = colaboradoresMock.reduce((acc, c) => {
  const ano = new Date(c.admissao).getFullYear();
  acc[ano] = (acc[ano] || 0) + 1;
  return acc;
}, {});

const anoMaisContratou = Object.entries(contratacoesPorAno)
  .sort((a, b) => b[1] - a[1])[0][0];

const columns = [
  { field: "nome", headerName: "Nome", flex: 1 },
  { field: "cargo", headerName: "Cargo", flex: 1 },
  { field: "departamento", headerName: "Departamento", flex: 1 },
  {
    field: "salario",
    headerName: "Salário",
    flex: 1,
    valueFormatter: (params) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(params.value)
  },
  { field: "status", headerName: "Status", flex: 1 },
  { field: "admissao", headerName: "Admissão", flex: 1 }
];

export default function CollaboratorsDash(){
    const navigate = useNavigate()
    return(
        <Box component={'div'} className={styles.containerCd}>
            <Typography variant="h3" className="h3" gutterBottom fontWeight={700} >
                Colaboradores
            </Typography>
            <Button onClick={() => navigate('/app/collaborators')}
                    sx={{
                        borderRadius: 10,
                        fontWeight: 600
                    }}    
                >
                    incluir colaborador
                </Button>
            <Grid container spacing={3}  mt={2} className="main">
                <Grid item xs={12} md={2} lg={3}>
                    <StatCard
                        title="Total de colaboradores" value={totalColaboradores}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                        title="Colaboradores ativos" value={totalAtivos}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                            title="Média salarial" value={ `R$ ${mediaSalarial.toFixed(2)}`}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                        title="Ano que mais contratou" value={anoMaisContratou}
                    />
                </Grid>
                <DataTable
                columns={columns}
                rows={colaboradoresMock}
                />                    
            </Grid>
        </Box>

    )
}