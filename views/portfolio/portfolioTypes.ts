export type PortfolioRow = {
    id: string,
    network: string,
    protocol: string,
    pool: string,
    lockDate?: number,
    tokens: number,
    price: number,
    totalValue: number,
    apr: number,
    yieldAnnum: number,
};
