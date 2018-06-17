import React from 'react';

export default class Signee extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Name" />
        <textarea rows="4" cols="50" placeholder="Key"></textarea>
      </div>
    );
  }
};