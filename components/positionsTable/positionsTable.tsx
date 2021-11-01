/* ./components/positionsTable/positionsTable.tsx */

import { useState } from 'react';
import { format } from 'date-fns'; 
import { useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useAppDispatch } from '../../lib/hooks';
import { 
    clearAllPositions,
    removePositionAsync,
    selectIsLoading,
    selectPortfolioRows,
    selectSelectedRowId,
    setSelectedRowId 
} from './positionsSlice';
import AddPositionModal from './addPositionDialog';
import PositionsTableToolbar from './positionsTableToolbar';
import RemovePositionAlert from './removePositionAlert';
import ClearAllPositionsAlert from './clearAllPositionsAlert';


// Table for showing all positions and current yields in a portfolio
const PositionsTable = () => {
    const rows = useSelector(selectPortfolioRows);
    const isLoading = useSelector(selectIsLoading);
    const [isAddPositionOpen, setAddPositionModalOpen] = useState(false);
    const [isClearAllPositionsOpen, setClearAllPositionsAlertOpen] = useState(false);
    const [isRemovePositionOpen, setRemovePositionAlertOpen] = useState(false);
    const selectedRowId = useSelector(selectSelectedRowId);
    const dispatch = useAppDispatch();

    const handleCancelAlerts = () => {
        setClearAllPositionsAlertOpen(false);
        setRemovePositionAlertOpen(false);
        dispatch(setSelectedRowId(undefined));
    }

    const handleCloseAddPosition = () => {
        setAddPositionModalOpen(false);
    };

    const handleShowAddPosition = () => {
        setAddPositionModalOpen(true);
        dispatch(setSelectedRowId(undefined));
    };

    const handleClearAllPositions = () => {
        dispatch(clearAllPositions());
        dispatch(setSelectedRowId(undefined));
        setClearAllPositionsAlertOpen(false);
    }

    const handleRemovePosition = () => {
        if (selectedRowId) {
            dispatch(removePositionAsync({ positionId: selectedRowId }));
        }
        setRemovePositionAlertOpen(false);
        dispatch(setSelectedRowId(undefined));
    };

    const handleShowClearPositionsAlert = () => {
        setClearAllPositionsAlertOpen(true);
    }

    const handleShowRemovePositionAlert = () => {
        setRemovePositionAlertOpen(true);
    }


    return (
        <>
        <PositionsTableToolbar
            onAddPositionClick={handleShowAddPosition}
            onClearPositionsClick={handleShowClearPositionsAlert}
            onRemovePositionClick={handleShowRemovePositionAlert}
        />
        <TableContainer>
            <Table 
                sx={{
                    minWidth: 650,

                }}
                aria-label='portfolio table'
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Network</TableCell>
                        <TableCell align='right'>Protocol</TableCell>
                        <TableCell align='right'>Pool (Lock Date)</TableCell>
                        <TableCell align='right'>Tokens</TableCell>
                        <TableCell align='right'>Price ($)</TableCell>
                        <TableCell align='right'>Total Value ($)</TableCell>
                        <TableCell align='right'>APR</TableCell>
                        <TableCell align='right'>Per Year ($)</TableCell>
                        <TableCell align='right'>Per Day ($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { rows.map((row, i) => {
                    const isRowSelected = row.id === selectedRowId;
                    return (
                        <TableRow
                            aria-checked={isRowSelected}
                            key={row.id}
                            onClick={() => dispatch(setSelectedRowId(row.id))}
                            role='checkbox'
                            selected={isRowSelected}
                            tabIndex={-1}
                            hover
                        >
                            <TableCell scope='row'>{row.network}</TableCell>
                            <TableCell align='right'>{row.protocol}</TableCell>
                            <TableCell align='right'>
                                { row.lockDate
                                    ? row.pool + ' (' + format(row.lockDate, 'MMM d, y') + ')'
                                    : row.pool
                                }
                            </TableCell>
                            <TableCell align='right'>{row.tokens}</TableCell>
                            <TableCell align='right'>{row.price}</TableCell>
                            <TableCell align='right'>{row.totalValue}</TableCell>
                            <TableCell align='right'>{row.apr}</TableCell>
                            <TableCell align='right'>{row.yieldAnnum.toFixed(2)}</TableCell>
                            <TableCell align='right'>{ (row.yieldAnnum / 365).toFixed(2) }</TableCell>
                        </TableRow>
                    );
                }) }
                </TableBody>
            </Table>
            { isLoading && <LinearProgress /> }
        </TableContainer>

        <AddPositionModal
            isOpen={isAddPositionOpen}
            onClose={handleCloseAddPosition}
        />

        <ClearAllPositionsAlert
            isOpen={isClearAllPositionsOpen}
            onCancel={handleCancelAlerts}
            onConfirm={handleClearAllPositions}
        />        

        <RemovePositionAlert
            isOpen={isRemovePositionOpen}
            onCancel={handleCancelAlerts}
            onConfirm={handleRemovePosition}
        />
        </>
    );
}


export default PositionsTable;
