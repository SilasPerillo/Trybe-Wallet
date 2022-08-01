import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editorAction } from '../redux/actions/expensesAction';

class BtnEdit extends Component {
  render() {
    const { hanldeEdit, id } = this.props;
    return (
      <button
        type="button"
        data-testid="edit-btn"
        onClick={ () => hanldeEdit(id) }
      >
        Editar despesa
      </button>
    );
  }
}

BtnEdit.propTypes = {
  hanldeEdit: PropTypes.func,
  id: PropTypes.number,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  hanldeEdit: (id) => dispatch(editorAction(id)),
});

export default connect(null, mapDispatchToProps)(BtnEdit);
