import { useState } from "react";
import styles from "./Collaborators.module.css";
import { Box, Paper } from "@mui/material";

export default function Collaborators() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    identifier: "",
    description: "",
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
    console.log("Dados do colaborador:", formData);
  }

  return (
    <>
      <Box
        className={styles.collaboratorSection}
        component={"section"}
        sx={{
          bgcolor: "background.defaut",
          color: "text.primary",
          minHeight: "100vh",
        }}
      >
        <Paper className={styles.collaboratorContainer}>
          <h1 className={styles.h1}>Cadastro de Colaborador</h1>

          <form className={styles.form} onSubmit={handleSubmit}>
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
              type="number"
              placeholder="CPF"
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

            <button className={styles.buttons} type="submit">
              Cadastrar
            </button>
          </form>
        </Paper>
      </Box>
    </>
  );
  // Abas relacionais: consultas, dashboard
}
