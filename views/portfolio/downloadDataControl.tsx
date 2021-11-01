import { useSelector } from 'react-redux';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import { globalTheme } from '../../lib/theme';
import { exportToJson } from '../../lib/utils';
import { selectPortfolioRows } from './portfolioSlice';


const DownloadDataControl = () => {
    const rows = useSelector(selectPortfolioRows);

    const handleDownloadPortfolio = () => {
        exportToJson(rows);
    };

    return (
        <Box sx={{
            borderColor: globalTheme.palette.primary.light,
            paddingBottom: 4,
            paddingLeft: 4,
            paddingRight: 4,
        }}>
            <Typography variant={'h6'}>
                Save & Restore
            </Typography>
            <Button
                onClick={handleDownloadPortfolio}
                variant='outlined'
            >
                Download
            </Button>

            <Button
                variant='contained'
                sx={{
                    marginLeft: 1,
                }}
            >
                Upload File
                <input
                    type='file'
                    hidden
                />
            </Button>
        </Box>
    );
};

export default DownloadDataControl;
