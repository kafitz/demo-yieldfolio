/* ./components/positionsTable/positionsTableToolbar.tsx */

import { IconButton, Tooltip } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffOutlineIcon from '@mui/icons-material/HighlightOff';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


interface PortfolioTableToolbarProps {
    onAddPositionClick: () => void;
    onClearPositionsClick: () => void;
    onRemovePositionClick: () => void;
};

// Enhanced functionality toolbar for positions table with action buttons
const PortfolioTableToolbar = (props: PortfolioTableToolbarProps) => {
    return (
        <Toolbar>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant='h6'
                id='tableTitle'
                component='div'
            >
                Positions
            </Typography>

            <Tooltip title='Add new position'>
                <IconButton onClick={props.onAddPositionClick} color='primary'>
                    <AddCircleOutlineIcon/>
                </IconButton>
            </Tooltip>

            <Tooltip title='Delete position'>
                <IconButton onClick={props.onRemovePositionClick} color='secondary'>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
            </Tooltip>

            <Tooltip title='Clear positions'>
                <IconButton onClick={props.onClearPositionsClick} color='warning'>
                    <HighlightOffOutlineIcon/>
                </IconButton>
            </Tooltip>            
        </Toolbar>
    );
}

export default PortfolioTableToolbar;
