/* ./components/globalAppBar.tsx */

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { defaultTheme } from '../lib/theme';


// General purpose app bar to add logo and sidebar/hamburger menu
const GlobalAppBar = () => {
    return (
        <AppBar
            position='static'
            elevation={0}
            sx={{
                backgroundColor: 'transparent',
                height: 60,
                display: 'flex',
                alignContent: 'center',
                paddingLeft: 5,
                paddingTop: 1,
            }}
        >
            <Typography
                variant='h5'
                component='div'
                sx={{
                    color: defaultTheme.palette.primary.main,
                    flexGrow: 1,
                    fontFamily: 'Plaster',
                }}
            >
                DEMO Inc.
            </Typography>                    
        </AppBar>        
    );
}

export default GlobalAppBar;
