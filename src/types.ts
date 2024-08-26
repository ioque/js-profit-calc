export type Operation = {
    id: number;
    type: "BUY" | "SELL" | "DIV" | "TAX";
    ticker: string;
    qnt: number;
    price: number;
}

export type PortfolioStatistic = {
    absProfit: number;
    profitByTicker: Array<ProfitByTicker>
}

export type ProfitByTicker = {
    ticker: string;
    profit: number;
}