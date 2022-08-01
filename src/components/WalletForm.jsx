import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense, editExpense, getCurrencies } from '../redux/actions/expensesAction';

const alimentacao = 'Alimentação';
const dinheiro = 'Dinheiro';
const usd = 'USD';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    currency: usd,
    method: dinheiro,
    tag: alimentacao,
    description: '',
    // exchangeRates:
  }

  componentDidMount() {
    const { saveCurrencies } = this.props;
    saveCurrencies();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleEdit = () => {
    const sendState = this.state;
    const { editExp, expenses, idToEdit } = this.props;
    this.setState({
      value: '',
      description: '',
    });
    editExp({ ...sendState, id: idToEdit }, expenses);
  }

  saveAddChange = () => {
    const { saveExpense } = this.props;
    saveExpense(this.state);
    let numForId = 1;
    const { id } = this.state;
    this.setState({
      id: numForId += id,
      value: '',
      currency: usd,
      method: dinheiro,
      tag: alimentacao,
      description: '',
    });
  }

  render() {
    const { currencies, editor } = this.props;
    const { value, currency, method, tag, description } = this.state;
    return (
      <div>
        <label htmlFor="expenseValue">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
            data-testid="value-input"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {currencies.map((element, index) => (
              <option key={ index } value={ element }>{element}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            value={ method }
            id="method"
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Catagoria
          <select
            name="tag"
            value={ tag }
            id="tag"
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option value={ alimentacao }>Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>
        {!editor ? (
          <button
            type="button"
            onClick={ this.saveAddChange }
          >
            Adicionar despesa
          </button>
        ) : (
          <button
            type="button"
            onClick={ this.handleEdit }
          >
            Editar despesa
          </button>
        )}
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  editExp: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.any,
  idToEdit: PropTypes.number,
  saveCurrencies: PropTypes.func,
  saveExpense: PropTypes.func,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
  editor: wallet.editor,
  idToEdit: wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrencies: () => dispatch(getCurrencies()),
  saveExpense: (payload) => dispatch(addExpense(payload)),
  editExp: (exp, expenses) => dispatch(editExpense(exp, expenses)),
});
// dispatch "dispara", "envio"

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
