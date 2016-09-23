import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className="row uncollapse">
          <li className="home small-4 columns"><a href="http://campudus.com/">Campudus</a></li>
          <li className="contact small-4 columns"><a href="http://campudus.com/#about">Kontakt</a></li>
          <li className="imprint small-4 columns"><a href="http://campudus.com/impressum.html">Impressum</a></li>
        </ul>
      </footer>
    );
  }
}