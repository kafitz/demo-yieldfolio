/* ./pages/index.tsx */
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/system/Box';

import { defaultTheme } from '../lib/theme';
import GlobalAppBar from '../components/globalAppBar';
import PortfolioLayout from '../views/portfolio/portfolioLayout';


// Initialize MaterialUI layout for app
const Home = () => {
    return (
		<ThemeProvider theme={defaultTheme}>
			<Box sx={{
				background: 'radial-gradient(circle, rgba(160,242,238,1) 0%, rgba(240,250,255,1) 100%)',
				minHeight: '100%',
				flexGrow: 1,
			}}>
				<GlobalAppBar />

				<PortfolioLayout />
			</Box>
		</ThemeProvider>
    )
}

export default Home
