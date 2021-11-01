/* ./components/positionsTable/addPositionDialog.tsx */

import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormGroup, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { useAppDispatch } from '../../lib/hooks';
import { addPositionAsync } from './positionsSlice';


interface AddPositionDialogProps {
    isOpen: boolean;
    onClose: () => void;
};

const networks = [
    { key: 'ethereum', label: 'Ethereum (L1)' },
    { key: 'optimism', label: 'Optimism' },
    { key: 'arbitrum', label: 'Arbitrum' },
];

// Modal with form to add new a position to the portfolio
const AddPositionDialog = (props: AddPositionDialogProps) => {
    const [network, setNetwork] = useState<string>(networks[0].key);
    const [protocol, setProtocol] = useState<string>();
    const [lockDate, setLockDate] = useState<number | null>(null);
    const [numTokens, setNumTokens] = useState<number>();
    const [controllerContract, setControllerContract] = useState<string>();
    const [tokenContract, setTokenContract] = useState<string>();
    const [didSubmit, setDidSubmit] = useState(false);
    const [isErrorProtocol, setErrorProtocol] = useState(false);
    const [isErrorNumTokens, setErrorNumTokens] = useState(false);
    const [isErrorControllerContract, setErrorControllerContract] = useState(false);
    const [isErrorTokenContract, setErrorTokenContract] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (didSubmit) {
            validateParams();
        }
    }, [protocol, numTokens, controllerContract, tokenContract]);

    const clearState = () => {
        setNetwork(networks[0].key);
        setProtocol(undefined);
        setLockDate(null);
        setNumTokens(undefined);
        setControllerContract(undefined);
        setTokenContract(undefined);    
    }

    const handleAddPosition = () => {
        if (!validateParams()) {
            setDidSubmit(true);
            return;
        }

        dispatch(addPositionAsync({
            network: network!,
            protocol: protocol!,
            lockDate: lockDate ? lockDate : undefined,
            tokens: numTokens!,
            controllerContract: controllerContract!,
            tokenContract: tokenContract!,
        }));
        props.onClose();
        clearState();
        setDidSubmit(false);
    }

    // TODO: fix this...?
    const validateParams = () => {
        let hasError;
        if (!isErrorProtocol && !protocol) {
            setErrorProtocol(true);
            hasError = true;
        } else if (isErrorProtocol && protocol) {
            setErrorProtocol(false);
        }
        if (!isErrorNumTokens && !numTokens) {
            setErrorNumTokens(true);
            hasError = true;
        } else if (isErrorNumTokens && numTokens) {
            setErrorNumTokens(false);
        }
        if (!isErrorControllerContract && !controllerContract) {
            setErrorControllerContract(true);
            hasError = true;
        } else if (isErrorControllerContract && controllerContract) {
            setErrorControllerContract(false);
        }
        if (!isErrorTokenContract && !tokenContract) {
            setErrorTokenContract(true);
            hasError = true;
        } else if (isErrorTokenContract && tokenContract) {
            setErrorTokenContract(false);
        }
        if (hasError) return false;     
        return true;
    }    

    return (
        <Dialog
            aria-labelledby='add-position-dialog-title'
            aria-describedby='add-position-dialog-description'
            open={props.isOpen}
            onClose={props.onClose}
            maxWidth={'md'}
            fullWidth
        >
            <DialogTitle id='add-position-dialog-title'>
                Add New Position
            </DialogTitle>
            <DialogContent>
                <DialogContentText id='add-position-dialog-description'>
                    Enter the contracts of the new position below to automatically look up its rates.
                </DialogContentText>
            
                <FormControl sx={{ display: 'flex', marginTop: 2 }}>
                    <FormGroup row sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <InputLabel id='network-select-label'>Network</InputLabel>
                        <Select
                            labelId='network-select-label'
                            id='network-select'
                            value={network}
                            label='Network'
                            onChange={(event: SelectChangeEvent) => setNetwork(event.target.value)}
                            sx={{height: 56, width: '29%'}}
                        >
                        { networks.map(network => (
                            <MenuItem key={network.key} value={network.key}>{network.label}</MenuItem>
                        )) }
                        </Select>

                        <TextField
                            id='protocol-input'
                            error={isErrorProtocol}
                            helperText={isErrorProtocol ? 'Required' : undefined}
                            label='Protocol'
                            margin='dense'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setProtocol(event.target.value)}
                            sx={{marginTop: 0, width: '19%'}}
                            type='text'
                            variant='outlined'
                            autoFocus
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label='Lock Date (optional)'
                                value={lockDate}
                                onChange={(newDate) => setLockDate(newDate)}
                                renderInput={(params) => <TextField {...params} sx={{width: '29%'}} />}
                            />
                        </LocalizationProvider>                        

                        <TextField
                            id='tokens-input'
                            error={isErrorNumTokens}
                            helperText={isErrorNumTokens ? 'Required' : undefined}
                            label='Tokens'
                            margin='dense'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const v = Number(event.target.value);
                                if (v) setNumTokens(v);
                            }}
                            sx={{marginTop: 0, width: '19%'}}
                            type='number'
                            variant='outlined'
                            value={numTokens || ''}
                            autoFocus
                        />
                    </FormGroup>
                        <TextField
                            id='controller-contract-input'
                            error={isErrorControllerContract}
                            helperText={isErrorControllerContract ? 'Required' : undefined}
                            label='Controller Contract'
                            margin='dense'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setControllerContract(event.target.value)}
                            type='text'
                            variant='standard'
                            autoFocus
                        />

                        <TextField
                            id='token-contract-input'
                            error={isErrorTokenContract}
                            helperText={isErrorTokenContract ? 'Required' : undefined}
                            label='Token Contract'
                            margin='dense'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTokenContract(event.target.value)}
                            type='text'
                            variant='standard'
                            autoFocus
                        />                        
                    <FormGroup>

                    </FormGroup>
                </FormControl>
            </DialogContent>

            <DialogActions>
                <Button onClick={props.onClose} color='secondary'>Cancel</Button>
                <Button onClick={handleAddPosition}>Add</Button>                
            </DialogActions>
        </Dialog>
    );
};

export default AddPositionDialog;
