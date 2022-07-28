import { LOG_USER } from '../actions/userAction';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIL_STATE = {
  email: '',
};

function user(state = INITIL_STATE, action) {
  switch (action.type) {
  case LOG_USER:
    return action.payload;
  default:
    return state;
  }
}

export default user;
