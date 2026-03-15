import styles from "./StockDash.module.css"
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography, Card, Input  } from "@mui/material"
import DataTable from "../../components/DataTable/DataTable";
import AddIcon from '@mui/icons-material/Add';
import StatCard from "../../components/StatCard/StatCard";

const productsMock = [
  { id: 1, nome: "Notebook Dell", categoria: "Eletrônicos", estoque: 15, entradas: 30, saidas: 15, status: "Ativo" },
  { id: 2, nome: "Mouse Logitech", categoria: "Periféricos", estoque: 40, entradas: 60, saidas: 20, status: "Ativo" },
  { id: 3, nome: "Teclado Mecânico", categoria: "Periféricos", estoque: 10, entradas: 25, saidas: 15, status: "Ativo" },
  { id: 4, nome: "Monitor LG", categoria: "Eletrônicos", estoque: 8, entradas: 20, saidas: 12, status: "Ativo" },
  { id: 5, nome: "Headset Gamer", categoria: "Periféricos", estoque: 0, entradas: 15, saidas: 15, status: "Inativo" },
  { id: 6, nome: "Cadeira Gamer", categoria: "Mobiliário", estoque: 5, entradas: 10, saidas: 5, status: "Ativo" },
  { id: 7, nome: "Webcam HD", categoria: "Eletrônicos", estoque: 12, entradas: 18, saidas: 6, status: "Ativo" },
  { id: 8, nome: "HD Externo", categoria: "Armazenamento", estoque: 20, entradas: 35, saidas: 15, status: "Ativo" }
];
const totalProdutos = productsMock.reduce((acc, p) => acc + p.estoque, 0);

const produtosAtivos = productsMock.filter(p => p.status === "Ativo").length;

const produtosInativos = productsMock.filter(p => p.status === "Inativo").length;

const mediaSaidas =
  productsMock.reduce((acc, p) => acc + p.saidas, 0) / productsMock.length;

const mediaEntradas =
  productsMock.reduce((acc, p) => acc + p.entradas, 0) / productsMock.length;

const totalCategorias = new Set(productsMock.map(p => p.categoria)).size;

const columns = [
    { field: "nome", headerName: "Produto", flex: 1 },
    { field: "categoria", headerName: "Categoria", flex: 1 },
    { field: "estoque", headerName: "Estoque", flex: 1 },
    { field: "entradas", headerName: "Entradas", flex: 1 },
    { field: "saidas", headerName: "Saídas", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 }
]

export default function StockDash(){
    const navigate = useNavigate();

    return(
        <Box
            component={'div'} className={styles.containerSd}
        >
            <Typography variant="h3" className="h3" fontWeight={700} sx={{display:"flex", gap:2}}>
                Estoque
            </Typography>
            <Grid item xs={6} textAlign="right">
                <Button variant="contained" onClick={() => navigate('/app/stock') }
                sx={{
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: "uppercase"
                }}    
                >
                    <AddIcon/>Incluir produto
                </Button>
            </Grid>
            <Grid container spacing={3} mt={2} className="main">
                <Grid item xs={12} md={2}>
                    <StatCard
                        sx={{
                            borderRadius:4,
                            p:1,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                        }}
                        icon={''}
                        className={styles.statcard}
                        title="Total de produtos" 
                        value={totalProdutos}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                        sx={{
                            borderRadius:4,
                            p:1,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                        }}
                        icon={''}
                        className={styles.statcard}
                        title="Produtos ativos" 
                        value={produtosAtivos}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                        sx={{
                            borderRadius:4,
                            p:1,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                        }}
                        icon={''}
                        className={styles.statcard}
                        title="Produtos inativos" 
                        value={produtosInativos}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                        sx={{
                            borderRadius:4,
                            p:1,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                        }}
                        icon={''}
                        className={styles.statcard}
                        title="Média de saídas" 
                        value={mediaSaidas.toFixed(1)}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                        sx={{
                            borderRadius:4,
                            p:1,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                        }}
                        icon={''}
                        className={styles.statcard}
                        title="Média de entradas" 
                        value={mediaEntradas.toFixed(1)}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <StatCard
                        sx={{
                            borderRadius:4,
                            p:1,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                        }}
                        icon={''}
                        className={styles.statcard}
                        title="Total de categorias" 
                        value={totalCategorias}
                    />
                </Grid>
                <Card sx={{
                    width:2000,
                    mt:4,
                    marginLeft:3,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    borderRadius:4,
                    p:3
                }}>
                    <Box display="flex" justifyContent="space-between" mb={2}>
                        <Typography variant="h6">
                            Lista de produtos
                        </Typography>
                    </Box>
                    <DataTable
                        rows={productsMock}
                        columns={columns}
                    />
                </Card>
            </Grid>
        </Box>
    );  
}