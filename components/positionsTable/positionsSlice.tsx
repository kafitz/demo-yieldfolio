/* ./components/positionsTable/positionsSlice.tsx */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../lib/store';

import { addPosition, AddPositionParams, clearPositions, deletePosition, DeletePositionParams, fetchContract } from '../../api/portfolio';
import { PositionsRow } from './positionsTableTypes';
import { portfolioTestData } from './portfolioTestData';


export interface PortfolioState {
    rows: PositionsRow[],
    selectedRowId?: string,
    status: 'idle' | 'loading' | 'failed';
}
  
const initialState: PortfolioState = {
    rows: portfolioTestData,
    status: 'idle',
};


/*
 * API Async Actions
 */
export const fetchContractAsync = createAsyncThunk(
    'portfolio/fetchContract',
    async (contractAddress: string) => {
        const response = await fetchContract(contractAddress);
        return response.data;
    }
);

export const addPositionAsync = createAsyncThunk(
    'portfolio/addPosition',
    async (params: AddPositionParams) => {
        const response = await addPosition(params);
        return response.data;
    }
);

export const removePositionAsync = createAsyncThunk(
    'portfolio/removePosition',
    async (params: DeletePositionParams) => {
        const response = await deletePosition(params);
        return response.data;
    }
)


/*
 * Slice state
 */
export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        clearAllPositions: (state) => {
            state.rows = [];
        },
        setSelectedRowId: (state, action: PayloadAction<string | undefined>) => {
            state.selectedRowId = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(fetchContractAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchContractAsync.fulfilled, (state, action) => {
            state.status = 'idle';
        })
        .addCase(fetchContractAsync.rejected, (state) => {
            state.status = 'failed';
        })
        .addCase(addPositionAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addPositionAsync.fulfilled, (state) => {
            state.status = 'idle';

            const newData: PositionsRow[] = [
                ...state.rows,
                {
                    id: 'ethereum-xbefinance-xbe-1',
                    network: 'Optimism',
                    protocol: 'Demo Finance',
                    pool: 'DEMO',
                    tokens: 12.5,
                    price: 1355.03,
                    totalValue: 16937.875,
                    apr: 211.31,
                    yieldAnnum: 35791.42,
                }
            ];
            state.rows = newData;
        })
        .addCase(addPositionAsync.rejected, (state) => {
            state.status = 'failed';
        })              

        .addCase(removePositionAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(removePositionAsync.fulfilled, (state, action: PayloadAction<string>) => {
            state.status = 'idle';

            const index = state.rows.findIndex(obj => obj.id === action.payload);
            const newData = [
                ...state.rows.slice(0, index),
                ...state.rows.slice(index + 1)
            ];
            state.rows = newData;
        })
        .addCase(removePositionAsync.rejected, (state) => {
            state.status = 'failed';
        })        
});


/*
 * Slice exported properties and methods
 */
export const { clearAllPositions, setSelectedRowId } = portfolioSlice.actions;

export const selectPortfolioRows = (state: RootState) => state.portfolio.rows;
export const selectSelectedRowId = (state: RootState) => state.portfolio.selectedRowId;
export const selectIsLoading = (state: RootState) => state.portfolio.status === 'loading';

export default portfolioSlice.reducer;
