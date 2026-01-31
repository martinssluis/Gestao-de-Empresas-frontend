import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './Collaborators.module.css';

export default function Collaborators() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    identifier: '',
    description: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // evita reload da página
    console.log('Dados do colaborador:', formData);
  }

  return (
    <Box
      className={styles.estiloCollaborator}
      sx={{ bgcolor: 'background.default', color: 'text.primary' }}
    >
      <section>
        <Box
          component="main"
          className={styles.collaboratorContainer}
          sx={{
            bgcolor: 'background.paper',
            color: 'text.primary',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <h1 className={styles.h1}>Cadastro de Colaborador</h1>

          <Box
            component="form"
            className={styles.form}
            onSubmit={handleSubmit}
            sx={{
              '& input, & textarea': {
                bgcolor: 'background.paper',
                color: 'text.primary',
                border: '1px solid',
                borderColor: 'divider',
              },
              '& input::placeholder, & textarea::placeholder': {
                color: 'text.secondary',
                opacity: 1,
              },
              '& input:focus, & textarea:focus': {
                borderColor: 'primary.main',
                outline: 'none',
                boxShadow: (theme) =>
                  `0 0 0 2px ${theme.palette.primary.main}33`,
              },
            }}
          >
            <input
              className={styles.inputs}
              type="text"
              placeholder="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              className={styles.inputs}
              type="email"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className={styles.inputs}
              type="password"
              placeholder="Senha"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <input
              className={styles.inputs}
              type="text"
              placeholder="Telefone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <input
              className={styles.inputs}
              type="text"
              placeholder="Identificador"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
            />

            <textarea
              className={styles.textarea}
              placeholder="Descrição"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            />

            <Button
              className={styles.buttons}
              type="submit"
              variant="contained"
              sx={{ textTransform: 'none' }}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </section>
    </Box>
  );
}
