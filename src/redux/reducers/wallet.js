import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDITOR_EXPENSES_ACTION,
  EDIT_ACTION,
  // EDIT_EXPENSE,
  SAVE_CURRENCIES,
} from '../actions/expensesAction';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
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
  case EDITOR_EXPENSES_ACTION:
    return {
      ...state,
      expenses: action.auxExpense,
      editor: false,
    };
  case EDIT_ACTION:
    return ({
      ...state,
      editor: true,
    });
  default:
    return state;
  }
}

export default wallet;
