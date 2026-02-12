import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useTheme } from '@mui/material/styles';
import { useAuthLanguage } from '../../context/AuthLanguageProvider';
import { useAuthTheme } from '../../context/AuthThemeProvider';
import { useI18n } from '../../i18n/useI18n';

function ThemePreview({ mode, isActive, t }) {
  const theme = useTheme();
  const isDark = mode === 'dark';
  const primaryColor = theme.palette.primary.main || '#3b82f6';

  const colors = isDark
    ? {
        panelBg: '#0b1220',
        panelBorder: 'rgba(59, 130, 246, 0.65)',
        panelGlow:
          '0 0 0 2px rgba(59, 130, 246, 0.16), 0 14px 30px rgba(3, 7, 18, 0.45)',
        title: '#e5edf8',
        bodyText: '#a9b6cb',
        fakeFrame: '#060b16',
        fakePill: '#90a4ae',
        fakeCardMain: '#0f172a',
        fakeCardSide: '#172036',
        lineStrong: '#d6deeb',
        lineSoft: '#9dacbf',
        chartBar: primaryColor,
        successDot: '#22c55e',
        dangerDot: '#ef4444',
        footerBorder: 'rgba(148, 163, 184, 0.22)',
        footerText: '#9fb0c8',
      }
    : {
        panelBg: '#111827',
        panelBorder: 'rgba(148, 163, 184, 0.36)',
        panelGlow: '0 10px 24px rgba(15, 23, 42, 0.30)',
        title: '#f1f5f9',
        bodyText: '#c5d0df',
        fakeFrame: '#0b1220',
        fakePill: '#cbd5e1',
        fakeCardMain: '#f8fafc',
        fakeCardSide: '#e2e8f0',
        lineStrong: '#64748b',
        lineSoft: '#94a3b8',
        chartBar: primaryColor,
        successDot: '#22c55e',
        dangerDot: '#ef4444',
        footerBorder: 'rgba(148, 163, 184, 0.26)',
        footerText: '#b3c1d4',
      };

  const Icon = isDark ? DarkModeOutlinedIcon : LightModeOutlinedIcon;
  const title = isDark ? t('pages.settings.themeDark') : t('pages.settings.themeLight');
  const description = isDark
    ? t('pages.settings.themeDarkDescription')
    : t('pages.settings.themeLightDescription');
  const footerLabel = isDark ? t('pages.settings.themeDarkDefault') : t('pages.settings.themeLightDefault');

  return (
    <Card
      variant="outlined"
      sx={{
        mt: 2,
        width: '100%',
        minHeight: 220,
        borderRadius: '12px',
        borderColor: isActive ? colors.panelBorder : 'divider',
        boxShadow: isActive ? colors.panelGlow : 'none',
        bgcolor: colors.panelBg,
        p: 1.5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
          <Icon sx={{ fontSize: 17, color: colors.title }} />
          <Typography variant="subtitle2" sx={{ color: colors.title, fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
        {isActive ? (
          <Chip
            label={t('common.active')}
            size="small"
            color="primary"
            sx={{ height: 20, fontSize: '0.68rem', fontWeight: 600 }}
          />
        ) : null}
      </Box>

      <Typography
        variant="caption"
        sx={{
          display: 'block',
          color: colors.bodyText,
          lineHeight: 1.45,
          mb: 1.2,
        }}
      >
        {description}
      </Typography>

      <Box
        sx={{
          position: 'relative',
          borderRadius: 2,
          p: 1,
          mb: 1.1,
          bgcolor: colors.fakeFrame,
          border: '1px solid rgba(148, 163, 184, 0.18)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            display: 'flex',
            gap: 0.5,
          }}
        >
          <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: colors.successDot }} />
          <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: colors.dangerDot }} />
        </Box>

        <Box
          sx={{
            height: 84,
            borderRadius: 1.5,
            p: 1,
            bgcolor: isDark ? '#0f172a' : '#e8eef7',
            border: '1px solid rgba(148, 163, 184, 0.20)',
          }}
        >
          <Box sx={{ display: 'flex', gap: 0.6, mb: 0.8 }}>
            <Box sx={{ width: 28, height: 5, borderRadius: 10, bgcolor: colors.fakePill }} />
            <Box sx={{ width: 22, height: 5, borderRadius: 10, bgcolor: colors.fakePill }} />
            <Box sx={{ width: 26, height: 5, borderRadius: 10, bgcolor: colors.fakePill }} />
          </Box>

          <Box sx={{ display: 'flex', gap: 0.8, height: 56 }}>
            <Box
              sx={{
                flex: 1,
                borderRadius: 1.2,
                p: 0.9,
                bgcolor: colors.fakeCardMain,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ width: '52%', height: 5, borderRadius: 8, bgcolor: colors.lineStrong }} />
              <Box
                sx={{
                  width: '100%',
                  height: 16,
                  borderRadius: 1,
                  bgcolor: 'rgba(59, 130, 246, 0.22)',
                  p: 0.4,
                }}
              >
                <Box sx={{ width: '72%', height: 8, borderRadius: 1, bgcolor: colors.chartBar }} />
              </Box>
              <Box sx={{ width: '76%', height: 4, borderRadius: 8, bgcolor: colors.lineSoft }} />
            </Box>

            <Box
              sx={{
                width: 34,
                borderRadius: 1.2,
                bgcolor: colors.fakeCardSide,
                p: 0.6,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ width: '100%', height: 5, borderRadius: 8, bgcolor: colors.lineStrong }} />
              <Box sx={{ width: '80%', height: 5, borderRadius: 8, bgcolor: colors.lineSoft }} />
              <Box sx={{ width: '92%', height: 5, borderRadius: 8, bgcolor: colors.lineSoft }} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ pt: 1, borderTop: '1px solid', borderColor: colors.footerBorder }}>
        <Typography variant="caption" sx={{ color: colors.footerText, fontWeight: 500 }}>
          {footerLabel}
        </Typography>
      </Box>
    </Card>
  );
}

export default function Settings() {
  const { mode, setMode } = useAuthTheme();
  const { language, setLanguage } = useAuthLanguage();
  const { t } = useI18n();
  const themeOptions = [
    {
      mode: 'light',
      title: t('pages.settings.themeLight'),
      description: t('pages.settings.themeLightDescription'),
    },
    {
      mode: 'dark',
      title: t('pages.settings.themeDark'),
      description: t('pages.settings.themeDarkDescription'),
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('pages.settings.title')}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        {t('pages.settings.subtitle')}
      </Typography>

      <Grid container spacing={2}>
        {themeOptions.map((option) => {
          const isActive = mode === option.mode;

          return (
            <Grid item xs={12} md={6} key={option.mode}>
              <Paper
                onClick={() => setMode(option.mode)}
                elevation={isActive ? 4 : 1}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: '2px solid',
                  borderColor: isActive ? 'primary.main' : 'divider',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography variant="h6">{option.title}</Typography>
                  {isActive ? <Chip label={t('common.active')} color="primary" size="small" /> : null}
                </Box>

                <Typography color="text.secondary">{option.description}</Typography>
                <ThemePreview mode={option.mode} isActive={isActive} t={t} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {t('pages.settings.language')}
        </Typography>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <FormControl fullWidth sx={{ maxWidth: 320 }}>
            <InputLabel id="auth-language-select-label">{t('pages.settings.language')}</InputLabel>
            <Select
              labelId="auth-language-select-label"
              id="auth-language-select"
              value={language}
              label={t('pages.settings.language')}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <MenuItem value="pt-BR">{t('language.ptBR')}</MenuItem>
              <MenuItem value="en">{t('language.en')}</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </Box>
    </Box>
  );
}
