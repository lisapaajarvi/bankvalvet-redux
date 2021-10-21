import { AppThunkAction } from "./store";

export interface WithdrawalAction {
    type: "WITHDRAWAL";
    payload: number;
}

export interface DepositAction {
    type: "DEPOSIT";
    payload: number;
}

export type BankAction = WithdrawalAction | DepositAction;

export const withdraw = (value: number): AppThunkAction =>
    (dispatch, getState) => {
        const state = getState();
        console.log(state.bank.balance);
        dispatch({ type: "WITHDRAWAL", payload: value });
    }