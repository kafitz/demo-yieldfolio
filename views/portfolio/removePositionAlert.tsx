import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface RemovePositionAlertProps {
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

const RemovePositionAlert = (props: RemovePositionAlertProps) => {
    return (
        <Dialog
            aria-labelledby='remove-position-alert-title'
            aria-describedby='remove-position-alert-description'        
            open={props.isOpen}
            onClose={props.onCancel}
        >
            <DialogTitle id='remove-position-alert-title'>
                Remove position?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id='remove-position-alert-description'>
                    This will remove the selected position from your portfolio.
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

export default RemovePositionAlert;
