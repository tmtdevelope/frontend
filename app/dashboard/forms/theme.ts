'use client';

import { createTheme, alpha } from '@mui/material/styles';

const lightPalette = {
  background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
  text: '#000000',
  primary: '#2563eb',
  secondary: '#10b981',
  paper: 'rgba(255, 255, 255, 0.9)',
};

const darkPalette = {
  background: 'linear-gradient(275.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
  text: '#ffffff',
  primary: '#60a5fa',
  secondary: '#34d399',
  paper: 'rgba(18, 18, 18, 0.9)',
};

export const createAppTheme = (mode: 'light' | 'dark') => {
  const colors = mode === 'light' ? lightPalette : darkPalette;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary,
        dark: mode === 'light' ? '#1d4ed8' : '#3b82f6',
        light: mode === 'light' ? '#60a5fa' : '#93c5fd',
        contrastText: '#ffffff',
      },
      secondary: {
        main: colors.secondary,
        dark: mode === 'light' ? '#059669' : '#065f46',
        light: mode === 'light' ? '#34d399' : '#6ee7b7',
        contrastText: '#ffffff',
      },
      background: {
        default: colors.background,
        paper: colors.paper,
      },
      text: {
        primary: colors.text,
        secondary: alpha(colors.text, 0.7),
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: colors.background,
            minHeight: '100vh',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            backdropFilter: 'blur(10px)',
            background: colors.paper,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          fullWidth: true,
          size: 'medium',
        },
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              backgroundColor: alpha(colors.paper, 0.8),
              '&:hover': {
                backgroundColor: alpha(colors.paper, 0.95),
              },
              '&.Mui-focused': {
                backgroundColor: colors.paper,
              },
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 600,
            padding: '12px 24px',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            },
          },
          contained: {
            background: `linear-gradient(45deg, ${colors.primary}, ${alpha(colors.primary, 0.8)})`,
            color: '#ffffff',
            '&:hover': {
              background: `linear-gradient(45deg, ${alpha(colors.primary, 0.9)}, ${alpha(colors.primary, 0.7)})`,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            backgroundColor: alpha(colors.paper, 0.8),
            '&:hover': {
              backgroundColor: alpha(colors.paper, 0.95),
            },
          },
          icon: {
            color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : undefined,
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            color: alpha(colors.text, 0.7),
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : undefined,
            '&.Mui-focused': {
              color: mode === 'dark' ? '#90caf9' : '#1976d2',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& fieldset': {
              borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : undefined,
            },
            '&:hover fieldset': {
              borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.4)' : undefined,
            },
            '&.Mui-focused fieldset': {
              borderColor: mode === 'dark' ? '#90caf9' : '#1976d2',
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : undefined,
            '&.Mui-checked': {
              color: mode === 'dark' ? '#90caf9' : '#1976d2',
            },
            '& .MuiRadio-label': {
              color: mode === 'dark' ? '#fff' : '#000',
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: mode === 'dark' ? '#fff' : '#000',
            '&:hover': {
              backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : undefined,
            },
            '&.Mui-selected': {
              backgroundColor: mode === 'dark' ? 'rgba(144, 202, 249, 0.16)' : undefined,
            },
          },
        },
      },
    },
  });
};
