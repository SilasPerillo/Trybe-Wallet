import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p
          data-testid="email-field"
        >
          {`Email: ${email}`}
        </p>
        <p
          data-testid="total-field"
        >
          {`Despesas totais: ${0}`}
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
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

// const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, null)(Header);
