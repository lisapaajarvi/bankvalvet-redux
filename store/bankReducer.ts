
interface WithdrawalAction {
    type: "WITHDRAWAL";
    payload: number;
}

interface DepositAction {
    type: "DEPOSIT";
    payload: number;
}

type KnownAction = WithdrawalAction | DepositAction;

/* ------------------------------ */

interface BankState {
    balance: number;
}

const initialState: BankState = {
    balance: 0
}

function bankReducer(state: BankState = initialState, action: KnownAction): BankState {
    switch (action.type) {
        case "WITHDRAWAL": {
            return {
                ...state,
                balance: state.balance - action.payload
            }
        }
        case "DEPOSIT": {
            return {
                ...state,
                balance: state.balance + action.payload
            }
        }
        default: return state;
    }
}

export default bankReducer;