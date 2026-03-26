import { useState, useEffect } from 'react';
import { getEmployees } from '../../service/employeeService';
import { useNavigate,  } from "react-router-dom"
import { Box, Button, Grid, Typography, Card, Input} from "@mui/material"
import styles from './EmployeesDash.module.css'
import StatCard from "../../components/StatCard/StatCard"
import DataTable from "../../components/DataTable/DataTable"
import Icon from '../../components/IconLibrary/IconLibrary';

const colaboradoresMock = [
{
  id: 1,
  nome: "João",
  email: "joao@email.com",
  telefone: "119999999",
  descricao: "Dev backend",
  role: "Dev",
  salarioBase: 5500,
  ativo: true,
},
{
  id: 2,
  nome: "Maria",
  email: "maria@email.com",
  telefone: "119888888",
  descricao: "Financeiro",
  role: "Financeiro",
  salarioBase: 6200,
  ativo: true
},
{
  id: 3,
  nome: "Carlos",
  email: "carlos@email.com",
  telefone: "119777777",
  descricao: "Gerente de logística",
  role: "Gerente",
  salarioBase: 7200,
  ativo: true
},
{
  id: 4,
  nome: "Fernanda",
  email: "fernanda@email.com",
  telefone: "119666666",
  descricao: "UX designer",
  role: "UX",
  salarioBase: 5800,
  ativo: true
},
{
  id: 5,
  nome: "Lucas",
  email: "lucas@email.com",
  telefone: "119555555",
  descricao: "Desenvolvedor frontend",
  role: "Dev",
  salarioBase: 6100,
  ativo: true
},
{
  id: 6,
  nome: "Ana",
  email: "ana@email.com",
  telefone: "119444444",
  descricao: "Analista financeiro",
  role: "Financeiro",
  salarioBase: 6400,
  ativo: true
},
{
  id: 7,
  nome: "Bruno",
  email: "bruno@email.com",
  telefone: "119333333",
  descricao: "Dev backend",
  role: "Dev",
  salarioBase: 5900,
  ativo: false
},
{
  id: 8,
  nome: "Juliana",
  email: "juliana@email.com",
  telefone: "119222222",
  descricao: "Product manager",
  role: "Produto",
  salarioBase: 7500,
  ativo: true
},
{
  id: 9,
  nome: "Ricardo",
  email: "ricardo@email.com",
  telefone: "119111111",
  descricao: "Dev fullstack",
  role: "Dev",
  salarioBase: 6700,
  ativo: true
},
{
  id: 10,
  nome: "Patricia",
  email: "patricia@email.com",
  telefone: "119000000",
  descricao: "Especialista em logística",
  role: "Logística",
  salarioBase: 6200,
  ativo: false
}

]

const totalColaboradores = colaboradoresMock.length;

const totalAtivos = colaboradoresMock.filter(c => c.ativo).length;

const totalRoles = [...new Set(colaboradoresMock.map(c => c.role))].length;

const mediaPorCargo = totalColaboradores / totalRoles;

const totalInativos = colaboradoresMock.filter(c => !c.ativo).length;

const totalFolha = colaboradoresMock.reduce(
  (acc, c) => acc + c.salarioBase,
  0
);
const mediaSalarial =
  colaboradoresMock.reduce((acc, c) => acc + c.salarioBase, 0) / totalColaboradores;;

const columns = [
  { field: "name", headerName: "Nome", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "phoneNumber", headerName: "Telefone", flex: 1 },
  { field: "description", headerName: "Observação", flex: 1 },
  { field: "role", headerName: "Cargo", flex: 1 },
  {
    field: "baseSalary",
    headerName: "Salário",
    flex: 1,
    renderCell: (params) => `R$ ${params.value}`
  },
  {
    field: "active",
    headerName: "Status",
    flex: 1,
    renderCell: (params) =>
      params.value ? "Ativo" : "Inativo"
  }
];
export default function EmployeesDash(){
  const [rows, setRows] = useState([]);

    useEffect(() => {
    loadEmployees();
    }, []);
  const loadEmployees = async () => {
    try {
        const data = await getEmployees();

        const formatted = data.map((emp, index) => ({
        id: index + 1, // verificar
        name: emp.name,
        email: emp.email,
        phoneNumber: emp.phoneNumber,
        description: emp.description,
        role: emp.role,
        baseSalary: emp.baseSalary,
        active: emp.isActive
        }));

        setRows(formatted);

    } catch (error) {
        console.error(error);
        }
  };


    const navigate = useNavigate()
    return(
        <Box component={'div'} className={styles.containerCd}
        >
            <Typography variant="h3" className="h3" gutterBottom fontWeight={700} sx={{display:"flex", gap:2}}
            >
                <Icon name="peopleIcon" sx={{color: "#3b70ab", fontSize:46}}/> Colaboradores
            </Typography>
            <Grid item xs={6} textAlign="right">
                <Button variant="contained" onClick={() => navigate('/app/employees')}
                        sx={{
                            borderRadius: 3,
                            fontWeight: 600,
                            textTransform: "uppercase"
                        }}    
                    >
                        <Icon name="addIcon"/> Incluir colaborador
                </Button>
            </Grid>
            <Grid container spacing={3}  mt={2} className="main">
                <Grid item xs={12} md={2}>
                    <StatCard
                    sx={{
                    borderRadius: 4,
                    p: 1,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                        icon={<Icon name="summarizeIcon" sx={{color: "#ffeb3b"}}/>}
                        className={styles.statcard}
                        title="Total" value={totalColaboradores}
                        trend={{ value: "+2%", positive: true }}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                    sx={{
                    borderRadius: 4,
                    p: 1,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                        icon={<Icon name="checkCircleTwoToneIcon" sx={{color: "#5da11e"}} />}
                        className={styles.statcard}
                        title="Ativos" value={totalAtivos}
                        trend={{ value: "+2%", positive: true }}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                    icon={<Icon name="groups2Icon" sx={{color:"#42a5f5"}} />}
                    sx={{
                        borderRadius: 4,
                        p: 1,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                    title="Média p/ cargo"
                    value={mediaPorCargo.toFixed(1)}
                    trend={{ value: "+2%", positive: true }}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                    icon={<Icon name="cancelTwoToneIcon" sx={{color:"#ef5350"}}/>}
                    sx={{
                        borderRadius: 4,
                        p: 1,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                    title="Inativos"
                    value={totalInativos}
                    trend={{ value: "-2%", positive: false }}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                    
                    icon={<Icon name="paidTwoToneIcon" sx={{color: "#a1981e"}}/>}
                    sx={{
                    borderRadius: 4,
                    p: 1,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                            className={styles.statcard}
                            title="Média salarial" 
                            value={ `R$ ${mediaSalarial.toFixed(2)}`}
                            trend={{ value: "+2%", positive: true }}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                    icon={<Icon name="descriptionTwoToneIcon"sx={{color:"#26a69a"}}/>}
                    sx={{
                        borderRadius: 4,
                        p: 1,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                    }}
                    title="Folha salarial"
                    value={`R$ ${totalFolha}`}
                    trend={{ value: "+3.5%", positive: true }}
                    />
                </Grid>
                <Card sx={{ borderRadius: 4, p: 3, mt: 4, width:2000, marginLeft:3, boxShadow: "0 8px 32px rgba(0,0,0,0.4)"}}>
                    <Box display="flex" justifyContent="space-between" mb={2}>
                        <Typography variant="h6">Lista de Colaboradores</Typography>
                        <Input placeholder="Pesquisar"
                        sx={{
                            width:400
                        }}                        
                        ></Input>
                    </Box>
                        <DataTable
                        columns={columns}
                        rows={rows}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        /> 
                </Card>
            </Grid>
        </Box>

    )
}