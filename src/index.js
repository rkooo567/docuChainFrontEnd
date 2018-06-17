import React from 'react';
import ReactDOM from 'react-dom';
// import { Web3Provider } from 'react-web3';

import './index.css';

import Header from './Header/index';
import Signee from './Signee/index';
import Contract from './Contract/index';
import Footer from './Footer/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signee1: {
        name: '',
        key: '',
      },
      signee2: {
        name: '',
        key: '',
      },
      contract: '',
    };
  }
  update(field, payload) {
    const newState = Object.assign(this.state);
    switch (typeof payload) {
      case 'string': {
        newState[field] = payload;
        break
      }
      case 'object': {
        newState[field] = Object.assign(newState[field], payload);
        break;
      }
      default: {}
    }
    this.setState(newState);
  }
  submit() {
    const areSigneeFieldsDefined = (signee) => {
      return signee.name.length && signee.key.length;
    }
    if (areSigneeFieldsDefined(this.state.signee1)
      && areSigneeFieldsDefined(this.state.signee2)
      && this.state.contract.length) {
      alert(JSON.stringify(this.state, null, 2));
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Signee model={this.state.signee1} update={(payload) => this.update('signee1', payload)} />
        <Signee model={this.state.signee2} update={(payload) => this.update('signee2', payload)} />
        <Contract model={this.state.contract} update={(payload) => this.update('contract', payload)} />
        <input type="button" onClick={this.submit.bind(this)} value="Submit" />
        <Footer />
      </div>
    );
  }
};

ReactDOM.render(
  <App />
  , document.getElementById('root')
);
