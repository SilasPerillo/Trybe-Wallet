import { ADD_EXPENSE, DELETE_EXPENSE, SAVE_CURRENCIES } from '../actions/expensesAction';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIL_STATE, action) {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, exchangeRates: action.data }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.auxExpense,
    };
  default:
    return state;
  }
}

export default wallet;
