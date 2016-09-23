import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="row">
        <div className="large-12 columns">
          <h1 id="logo"><i className="icon-campudusLogo"><span>Campudus Developers</span></i></h1>
        </div>
      </header>
    );
  }
}