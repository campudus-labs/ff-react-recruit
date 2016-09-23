import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <div className="content row" data-equalizer>
        <div className="large-4 medium-12 small-12 columns" data-equalizer-watch>
          <h2>Die Mission</h2>

          <p>Jeden Tag die beste Arbeit liefern. Entwickeln, coden, designen. Präzise, schnell und effektiv - denn schon der
            nächste Morgen wartet mit neuen Herausforderungen.
          </p>

        </div>
        <div className="large-4 medium-12 small-12 columns" data-equalizer-watch>
          <h2>Einsatzgebiet</h2>

          <p>Landshut: Benzstraße 13, Stock 1. Unauffällig im Hinterhalt. Exzellente Infrastruktur. Nahrungssuche gestaltet
            sich gefahrlos und einfach.</p>

        </div>
        <div className="large-4 medium-12 small-12 columns" data-equalizer-watch>
          <h2>Das Team</h2>

          <p>300 Spartiaten brauchen wir nicht. Sechs Köpfe und wir bestreiten jeden Auftrag - unverletzt. Unser Team gibt
            Dir bei Deinen Einsätzen Rückendeckung.</p>

        </div>
      </div>
    );
  }
}