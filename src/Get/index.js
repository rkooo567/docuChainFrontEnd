import React from 'react';

import Contract from './Contract/index';
import Key from './Key/index';

export default class Get extends React.Component {
  render() {
    return (
      <div>
        <Key />
        <Contract />
      </div>
    );
  }
};