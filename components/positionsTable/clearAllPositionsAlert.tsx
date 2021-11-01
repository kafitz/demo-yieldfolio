/* ./components/positionsTable/clearAllPositionsAlert.tsx */

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface ClearAllPositionsAlertProps {
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

// Modal to warn user about deleting all positions in portfolio
const ClearAllPositionsAlert = (props: ClearAllPositionsAlertProps) => {
    return (
        <Dialog
            aria-labelledby='clear-all-positions-alert-title'
            aria-describedby='clear-all-positions-alert-description'        
            open={props.isOpen}
            onClose={props.onCancel}            
        >
            <DialogTitle id='remove-position-alert-title'>
                Clear all positions?
            </DialogTitle>

            <DialogContent>
                <DialogContentText id='remove-position-alert-description'>
                    This will remove all positions from your portfolio.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onCancel} color='secondary'>Cancel</Button>
                <Button onClick={props.onConfirm} autoFocus>
                    Confirm
                </Button>
            </DialogActions>               
        </Dialog>
    );
}

export default ClearAllPositionsAlert;

