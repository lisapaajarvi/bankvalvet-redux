import type { BankAction } from './bankActions';

interface BankState {
    balance: number;
    transactions: number[];
}

const initialState: BankState = {
    balance: 0,
    transactions: []
}

type KnownAction = BankAction;

function bankReducer(state: BankState = initialState, action: KnownAction): BankState {
    switch (action.type) {
        case 'WITHDRAWAL': {
            return {
                ...state,
                balance: state.balance - action.payload,
                transactions: [...state.transactions, -action.payload]
            }
        }
        case 'DEPOSIT': {
            return {
                ...state,
                balance: state.balance + action.payload,
                transactions: [...state.transactions, action.payload]
            }
        }
        default: return state;
    }
}

export default bankReducer;