import { useState } from 'react';
import stockStyles from '../Stock/Stock.module.css';
import { Box, Button, Paper, TextField } from '@mui/material';
import { useI18n } from '../../i18n/useI18n';

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'background.paper',
    borderRadius: '0.6rem',
    '& fieldset': { borderColor: 'divider' },
    '&:hover fieldset': { borderColor: 'text.secondary' },
    '&.Mui-focused fieldset': { borderColor: 'primary.main', borderWidth: 2 },
  },
  '& .MuiInputLabel-root': { color: 'text.secondary' },
  '& .MuiInputBase-input': {
    color: 'text.primary',
    fontSize: '1rem',
    py: '0.85rem',
    px: '1rem',
  },
  '& .MuiInputBase-inputMultiline': {
    px: '1rem',
    py: '0.85rem',
  },
};

export default function Collaborators() {
  const { t } = useI18n();
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
    <div className={stockStyles.styleStock}>
      <section>
        <Paper className={stockStyles.containerStock} elevation={0} sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
          <h1 className={stockStyles.h1}>{t('pages.collaborators.title')}</h1>

          <Box component="form" className={stockStyles.form} onSubmit={handleSubmit}>
            <TextField
              label={t('pages.collaborators.name')}
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={fieldSx}
            />

            <TextField
              label={t('pages.collaborators.email')}
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={fieldSx}
            />

            <TextField
              label={t('pages.collaborators.password')}
              variant="outlined"
              fullWidth
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={fieldSx}
            />

            <TextField
              label={t('pages.collaborators.phone')}
              variant="outlined"
              fullWidth
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={fieldSx}
            />

            <TextField
              label={t('pages.collaborators.identifier')}
              variant="outlined"
              fullWidth
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={fieldSx}
            />

            <TextField
              label={t('pages.collaborators.description')}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={{ ...fieldSx, gridColumn: '1 / -1' }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={stockStyles.buttons}
              fullWidth
              sx={{ textTransform: 'none', boxShadow: 'none' }}
            >
              {t('pages.collaborators.submit')}
            </Button>
          </Box>
        </Paper>
      </section>
    </div>
  );
  // Abas relacionais: consultas, dashboard
}
