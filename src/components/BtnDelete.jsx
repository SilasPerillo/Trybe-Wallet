import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses } from '../redux/actions/expensesAction';

class BtnDelete extends Component {
  render() {
    const { id, expenses, deleteExp } = this.props;
    return (
      <button
        data-testid="delete-btn"
        type="button"
        onClick={ () => { deleteExp(id, expenses); } }
      >
        Delete
      </button>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id, expense) => dispatch(deleteExpenses(id, expense)),
});

BtnDelete.propTypes = {
  deleteExp: PropTypes.func,
  expenses: PropTypes.array,
  id: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(BtnDelete);
