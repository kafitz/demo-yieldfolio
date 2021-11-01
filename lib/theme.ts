/* ./lib/theme.ts */

import { alpha } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/plaster/400.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/900.css';


export const globalTheme = createTheme({
    palette: {
        primary: {
            light: '#8AB6D6',
            main: '#2978B5',
            dark: '#0061A8'
        }
    },
    typography: {
        fontFamily: 'IBM Plex Sans, sans-serif'
    },
});

export const defaultTheme = createTheme({
    components: {
        MuiTable: {
            styleOverrides: {
                root: {
                    borderCollapse: 'separate',
                    borderSpacing: '0px 4px',
                }
            }
        },        
        MuiTableContainer: {
            styleOverrides: {            
                root: {
                    backgroundColor: alpha(globalTheme.palette.primary.light, 0.1),
                    borderColor: alpha(globalTheme.palette.primary.light, 0.2),
                    borderWidth: 2,
                    borderRadius: 12,
                    borderStyle: 'solid',
                    padding: '4px 8px',
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontFamily: 'Source Sans Pro, sans-serif',
                    fontSize: 15,
                    borderBottom: 'inherit',
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    backgroundColor: globalTheme.palette.common.white,
                    '&.MuiTableRow-hover:hover': {
                        cursor: 'pointer',
                        backgroundColor: alpha(globalTheme.palette.primary.main, 0.2),
                    },
                    '&.Mui-selected': {
                        backgroundColor: alpha(globalTheme.palette.primary.main, 0.4),
                    },
                    '& th': {
                        fontWeight: 900,
                        paddingBottom: 10,
                        paddingTop: 10,
                    },
                    '& th:last-child': {
                        border: 0,
                    },
                    '& td': {
                        paddingBottom: 20,
                        paddingTop: 20,
                    },                    
                    '& td:first-of-type': {
                        borderBottomLeftRadius: 5,
                        borderTopLeftRadius: 5,
                    },
                    '& td:last-child': {
                        border: 0,
                        borderBottomRightRadius: 5,
                        borderTopRightRadius: 5,
                    },            
                },
                hover: {
                    backgroundColor: 'blue',
                }
            }
        },
    },
}, globalTheme);
