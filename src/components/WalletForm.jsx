import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencies } from '../redux/actions/expensesAction';

class WalletForm extends Component {
  componentDidMount() {
    const { saveCurrencies } = this.props;
    saveCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="expenseValue">
          Valor:
          <input
            type="text"
            name="expenseValue"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
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
            data-testid="method-input"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Catagoria
          <select
            name="tag"
            data-testid="tag-input"
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            data-testid="description-input"
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  saveCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrencies: () => dispatch(getCurrencies()),
});
// pode colocar qualquer nome "saveCurrencies"
// dispatch "dispara", "envio"

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
