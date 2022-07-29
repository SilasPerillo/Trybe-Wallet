import { ADD_EXPENSE, SAVE_CURRENCIES } from '../actions/expensesAction';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIL_STATE, action) {
  switch (action.type) {
  // case EXPENSES_DATA:
  //   return {
  //     ...state,
  //     expenses: [...state.expenses, action.payload],
  //   };
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
  default:
    return state;
  }
}

export default wallet;
