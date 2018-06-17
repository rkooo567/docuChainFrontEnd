import React from 'react';
import ReactDOM from 'react-dom';
import { Web3Provider } from 'react-web3';

import './index.css';

import Header from './Header/index';
import Signee from './Signee/index';
import Contract from './Contract/index';
import Footer from './Footer/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Signee />
        <Signee />
        <Contract />
        <Footer />
      </div>
    );
  }
};

ReactDOM.render(
  <App />
  , document.getElementById('root')
);
