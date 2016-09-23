import React, { Component } from 'react';

export default class HeadText extends Component {
  render() {
    return (
      <div className="headtext row">
        <div className="large-12 columns">
          <h1>Aufgepasst, wir rekrutieren!</h1>

          <p className="intro">Für unser Coding Task Team von Campudus suchen wir Verstärkung. Schleif' Deine Maus,
            refaktorisier' Deinen Code und kämpf' Dich durch das extremste Bootcamp der Geschichte!*</p>

          <p className="small">* Eigentlich dauert es nur 2 Minuten.</p>
        </div>
      </div>
    );
  }
}