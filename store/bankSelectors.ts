import { RootState } from "./store";

export const selectBalance = (state: RootState) => state.balance;
export const selectTransactions = (state: RootState) => [...state.transactions].reverse();