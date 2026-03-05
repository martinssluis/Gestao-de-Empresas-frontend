import { useState } from 'react';
import styles from './Collaborators.module.css';
import { Box, Paper } from '@mui/material';
import { createEmployee } from '../../service/employeeService';

export default function Collaborators() {
  // Form agora contém TODOS os campos que o DTO do backend exige
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    description: '',
    isActive: false,
    lastLogin: '2026-02-28T00:23:53.464891Z',
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
        lastLogin: '',
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
    <Box component={'div'} className={styles.estiloCollaborator}>
      <Box
        component={'section'}
        sx={{ bgcolor: 'background.defaut', color: 'text.primary', minHeight: '100vh' }}
      >
        <Paper className={styles.collaboratorContainer}>
          <h1 className={styles.h1}>Cadastro de Colaborador</h1>

          {errorMsg && <p className={styles.error}>{errorMsg}</p>}
          {successMsg && <p className={styles.success}>{successMsg}</p>}

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.inputs}
              type="text"
              placeholder="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className={styles.inputs}
              type="email"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              className={styles.inputs}
              type="password"
              placeholder="Senha"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <input
              className={styles.inputs}
              type="text"
              placeholder="Telefone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />

            <textarea
              className={styles.textarea}
              placeholder="Descrição"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            />

            {/* isActive */}
            <label className={styles.checkboxRow}>
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />
              Ativo?
            </label>

            {/* role */}
            <input
              className={styles.inputs}
              type="number"
              placeholder="Role (ex: 1)"
              name="role"
              value={formData.role}
              onChange={handleChange}
              min={1}
              required
            />

            {/* baseSalary */}
            <input
              className={styles.inputs}
              type="number"
              placeholder="Salário Base (ex: 4895.89)"
              name="baseSalary"
              value={formData.baseSalary}
              onChange={handleChange}
              step="0.01"
              min="0"
              required
            />

            <button className={styles.buttons} type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}