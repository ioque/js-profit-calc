import {Operation, PortfolioStatistic} from "./types";


export const calcProfit = (operations: Array<Operation>): PortfolioStatistic  => {
    return {
        absProfit: 0,
        profitByTicker: []
    };
}