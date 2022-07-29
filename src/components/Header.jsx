import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const sum = expenses
      .reduce((acc, curr) => (
        acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)), 0);
    return (
      <header>
        <p
          data-testid="email-field"
        >
          {`Email: ${email}`}
        </p>
        <p>
          Despesas totais:
          {' $'}
          <span
            data-testid="total-field"
          >
            {sum.toFixed(2)}
          </span>
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
