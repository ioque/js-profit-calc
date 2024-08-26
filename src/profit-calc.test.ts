import {describe, expect, test} from '@jest/globals';
import {Operation} from "./types";
import {calcProfit} from "./profit-calc";

describe('profit calculator module', () => {
    test("calc profit test", () => {
        expect(calcProfit(operations)).toEqual(expectedPortfolioStatistic)
    })
})

const operations: Array<Operation> = [
    {
        id: 1,
        type: "BUY",
        ticker: "AFKS",
        price: 12,
        qnt: 2000,
    },
    {
        id: 2,
        type: "BUY",
        ticker: "GAZP",
        price: 200,
        qnt: 1000,
    },
    {
        id: 3,
        type: "BUY",
        ticker: "SBER",
        price: 110,
        qnt: 1000,
    },
    {
        id: 4,
        type: "BUY",
        ticker: "AFKS",
        price: 13,
        qnt: 1000,
    },
    {
        id: 5,
        type: "BUY",
        ticker: "AFKS",
        price: 14,
        qnt: 1000,
    },
    {
        id: 6,
        type: "BUY",
        ticker: "GAZP",
        price: 205,
        qnt: 1000,
    },
    {
        id: 7,
        type: "BUY",
        ticker: "SBER",
        price: 112,
        qnt: 500,
    },
    {
        id: 7,
        type: "BUY",
        ticker: "SBER",
        price: 112,
        qnt: 500,
    },
    {
        id: 8,
        type: "SELL",
        ticker: "AFKS",
        price: 13,
        qnt: 1000,
    },
    {
        id: 9,
        type: "BUY",
        ticker: "GAZP",
        price: 210,
        qnt: 10000,
    },
    {
        id: 10,
        type: "SELL",
        ticker: "AFKS",
        price: 10,
        qnt: 3000,
    },
    {
        id: 11,
        type: "SELL",
        ticker: "SBER",
        price: 115,
        qnt: 1500,
    },
    {
        id: 12,
        type: "DIV",
        ticker: "GAZP",
        price: 1,
        qnt: 10000,
    },
    {
        id: 13,
        type: "SELL",
        ticker: "GAZP",
        price: 210,
        qnt: 12000,
    },
    {
        id: 14,
        type: "TAX",
        ticker: null,
        price: 1,
        qnt: 1000
    }
]

const expectedPortfolioStatistic = [
    {
        absProfit: 22500,
        profitByTicker: [
            {
                ticker: "AFKS",
                profit: -8000
            },
            {
                ticker: "GAZP",
                profit: 25000
            },
            {
                ticker: "SBER",
                profit: 6500
            }
        ]
    }
]