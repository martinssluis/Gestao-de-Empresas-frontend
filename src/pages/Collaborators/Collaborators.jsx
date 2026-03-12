import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';;
import styles from './Collaborators.module.css';
import { Box, Button, Paper, Container, Typography, Grid, TextField, FormControlLabel, Checkbox, Stack, MenuItem } from '@mui/material';
import { createEmployee  } from '../../service/employeeService';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function Collaborators() {
  const navigate = useNavigate();


  // Form agora contém TODOS os campos que o DTO do backend exige
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    description: '',
    isActive: false,
    lastLogin: "2026-02-28T00:23:53.464891Z",
    role: 1,
    baseSalary: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setIsSubmitting(true);

    try {
      // Monta exatamente o JSON que o backend espera
      const dto = {
        name: formData.name,
        password: formData.password,
        isActive: Boolean(formData.isActive),
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        description: formData.description,

        // lastLogin no formato ISO (ex: 2026-02-28T00:23:53.464Z)
        // Se o backend exigir o "Z", isso já vem no toISOString()
        lastLogin: new Date().toISOString(),

        // AVALIAR !!!
        // garante number
        role: Number(formData.role),

        // garante decimal (se estiver vazio vira 0)
        baseSalary: formData.baseSalary === '' ? 0 : Number(formData.baseSalary),
      };

      const created = await createEmployee(dto);

      setSuccessMsg('Colaborador cadastrado com sucesso!');
      console.log('Criado:', created);

      // Reset do form
      setFormData({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        description: '',
        isActive: false,
        lastLogin: "2026-02-28T00:23:53.464891Z",
        role: 1,
        baseSalary: '',
      });
    } catch (err) {
      setErrorMsg(err?.message || 'Erro ao cadastrar colaborador.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() =>navigate('/app/collaboratorsdash')}>
        <ArrowBackIosNewIcon/> Voltar
      </Button>
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          <GroupAddIcon/> Cadastro de Colaborador
        </Typography>

        {errorMsg && <Typography color="error">{errorMsg}</Typography>}
        {successMsg && <Typography color="success.main">{successMsg}</Typography>}

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Senha"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Telefone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Descrição"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isActive}
                    onChange={handleChange}
                    name="isActive"
                  />
                }
                label="Ativo?"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                select
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <MenuItem value="Seller">Seller</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Intern">Intern</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Salário Base"
                type="number"
                name="baseSalary"
                value={formData.baseSalary}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Stack alignItems="center">
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.registerButton}
                >
                  {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                </Button>
              </Stack>
            </Grid>

          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}