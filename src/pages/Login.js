import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAction } from '../redux/actions/userAction';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  isValidationBtn = () => {
    const { email, password } = this.state;
    const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
    const minLength = 6;
    if (!regex.test(email)) return true;
    if (password.length < minLength) return true;
    return false;
  }

  handleClick = () => {
    const { saveSubmit, history } = this.props;
    saveSubmit(this.state);
    history.push('/carteira');
  }

  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ this.isValidationBtn() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveSubmit: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  saveSubmit: (payload) => dispatch(userAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

