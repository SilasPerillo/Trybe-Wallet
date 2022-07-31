export const EXPENSES_DATA = 'EXPENSES_DATA';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

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

export const getCurrencies = () => async (dispatch) => {
  const APIURL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(APIURL);
  const data = await response.json();
  const arrayCurrencies = Object.keys(data).filter((element) => element !== 'USDT');
  dispatch(saveCurrencies(arrayCurrencies));
};

export async function exchangeApi() {
  const APIURL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
}

export const addExpense = (payload) => async (dispatch) => {
  const data = await exchangeApi();
  dispatch({ type: ADD_EXPENSE, data, payload });
};
