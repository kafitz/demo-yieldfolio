import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

import DownloadDataControl from '../../components/downloadDataControl';
import PositionsTable from '../../components/positionsTable/positionsTable';


// Provide an overall layout for the portfolio page components
const PortfolioLayout = () => {
    return (
        <Grid container spacing={0} sx={{ paddingTop: 12 }}>
            <Grid item xs={12}>
                <Container>
                    <Box sx={{
                        marginBottom: 3,
                    }}>
                        <Typography variant='h3'>Yieldfolio</Typography>
                    </Box>
                    <PositionsTable />
                </Container>
            </Grid>
            <Grid item xs={12}>
                <Container>
                    <DownloadDataControl />
                </Container>
            </Grid>
        </Grid>
    );
}


export default PortfolioLayout;
