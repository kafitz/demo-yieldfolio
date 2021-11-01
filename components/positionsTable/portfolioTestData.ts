/* ./components/positionsTable/portfolioTestData.ts */

import { PositionsRow } from './positionsTableTypes';


export const portfolioTestData: PositionsRow[] = [
    {
        id: 'ethereum-aave-yfi-1',
        network: 'Ethereum (L1)',
        protocol: 'Aave',
        pool: 'YFI',
        tokens: 0.11211,
        price: 34934.10,
        totalValue: 3916.46,
        apr: 3.12,
        yieldAnnum: 122.19,
    },        
    {
        id: 'ethereum-barnbridge-bond-1',
        network: 'Ethereum (L1)',
        protocol: 'Barnbridge',
        pool: 'BOND',
        tokens: 528.50,
        price: 28.67,
        totalValue: 15152.07,
        apr: 46.31,
        yieldAnnum:  7016.93,
    },
    {
        id: 'ethereum-convex-cvxcrv-1',
        network: 'Ethereum (L1)',
        protocol: 'Convex',
        pool: 'cvxCRV',
        tokens: 246.70,
        price: 2.83,
        totalValue: 698.16,
        apr: 62.43,
        yieldAnnum: 435.86,
    },
    {
        id: 'ethereum-convex-cvx-2',
        network: 'Ethereum (L1)',
        protocol: 'Convex',
        pool: 'CVX',
        lockDate: new Date('Feb 2, 2022').getTime(),
        tokens: 52.03,
        price: 14.03,
        totalValue: 729.98 ,
        apr: 10.12,
        yieldAnnum: 73.87,
    }
];
