export const EXPENSES_DATA = 'EXPENSES_DATA';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const EDIT_ACTION = 'EDIT_ACTION';
export const EDITOR_EXPENSES_ACTION = 'EDITOR_EXPENSES_ACTION';
const APIURL = 'https://economia.awesomeapi.com.br/json/all';

export const expensesData = (payload) => ({
  type: EXPENSES_DATA,
  payload,
});

const saveCurrencies = (payload) => ({
  type: SAVE_CURRENCIES,
  payload,
});

export const deleteExpenses = (item, expenses) => (dispath) => {
  const auxExpense = expenses.filter((id) => id.id !== item);
  dispath({ type: DELETE_EXPENSE, auxExpense });
};

export const editorExpensesAction = (auxExpense) => ({
  type: EDITOR_EXPENSES_ACTION,
  auxExpense,
});

export const editExpense = (exp, expenses) => (dispatch) => {
  const auxExpenses = expenses.map((element) => {
    if (element.id === exp.id) {
      return {
        ...element,
        ...exp,
      };
    }
    return element;
  });
  dispatch(editorExpensesAction(auxExpenses));
};

export const editorAction = (id) => ({
  type: EDIT_ACTION,
  editor: true,
  idToEdit: id,
});

export const getCurrencies = () => async (dispatch) => {
  const response = await fetch(APIURL);
  const data = await response.json();
  const arrayCurrencies = Object.keys(data).filter((element) => element !== 'USDT');
  dispatch(saveCurrencies(arrayCurrencies));
};

export async function exchangeApi() {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
}

export const addExpense = (payload) => async (dispatch) => {
  const data = await exchangeApi();
  dispatch({ type: ADD_EXPENSE, data, payload });
};
