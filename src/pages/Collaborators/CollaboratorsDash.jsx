import { useNavigate,  } from "react-router-dom"
import { useState } from "react"
import { Box, Button, Grid, Typography, Card, Input} from "@mui/material"
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
/*
const [searchTerm, setSearchTerm] = useState('');

const filteredCollaborators = colaboradoresMock.filter((collaborator) => {collaborator.nome.toLowerCase().includes(searchTerm.toLowerCase())});

const selectedCollaborator = filteredCollaborators[0] || null
*/
export default function CollaboratorsDash(){
    const navigate = useNavigate()
    return(
        <Box component={'div'} className={styles.containerCd}
        >
            <Typography variant="h3" className="h3" gutterBottom fontWeight={700} 
            >
                Colaboradores
            </Typography>
            <Grid item xs={6} textAlign="right">
                <Button variant="contained" onClick={() => navigate('/app/collaborators')}
                        sx={{
                            borderRadius: 3,
                            fontWeight: 600,
                            textTransform: "uppercase"
                        }}    
                    >
                        Incluir colaborador
                </Button>
            </Grid>
            <Grid container spacing={3}  mt={2} className="main">
                <Grid item xs={12} md={2} lg={3}>
                    <StatCard
                    sx={{
                    borderRadius: 4,
                    p: 1,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                        title="Total de colaboradores" value={totalColaboradores}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                    sx={{
                    borderRadius: 4,
                    p: 1,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                        title="Colaboradores ativos" value={totalAtivos}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                    sx={{
                    borderRadius: 4,
                    p: 1,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                            title="Média salarial" value={ `R$ ${mediaSalarial.toFixed(2)}`}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                    sx={{
                    borderRadius: 4,
                    p: 1,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                        title="Ano que mais contratou" value={anoMaisContratou}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                    sx={{
                    borderRadius: 4,
                    p: 1,
                    width:440,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                        title="Média de contratações" value="2/y"
                    />
                </Grid>
                <Card sx={{ borderRadius: 4, p: 3, mt: 4, width:2000, marginLeft:3}}>
                    <Box display="flex" justifyContent="space-between" mb={2}>
                        <Typography variant="h6">Lista de Colaboradores</Typography>
                        <Input placeholder="Pesquiar"
                        sx={{
                            width:400
                        }}
                        
                        ></Input>
                    </Box>
                        <DataTable
                        columns={columns}
                        rows={colaboradoresMock}
                        /> 
                </Card>
            </Grid>
        </Box>

    )
}