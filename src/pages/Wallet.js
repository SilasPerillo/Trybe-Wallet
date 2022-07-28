import React, { Component } from 'react';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';

export default class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
      </div>
    );
  }
}
