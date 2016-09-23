import React, { Component } from 'react';

export default class Phylosophy extends Component {
  render() {
    return (
      <div className="philosophy row">
        <div className="large-12 columns">
          <h2>Unser Kodex</h2>

          <div className="large-4 medium-12 small-12 columns" data-equalizer-watch>
            <h3>Open-Source</h3>

            <p>Unsere Alliierten verteilen sich weltweit. Gemeinsam pullen, mergen, committen und pushen wir uns gegenseitig
              nach vorne, um auch dem letzten übrig gebliebenen Bug den Garaus zu machen.</p></div>
          <div className="large-4 medium-12 small-12 columns" data-equalizer-watch>
            <h3>Test-Driven</h3>

            <p>Unsere Testpiloten haben eine harte Schale. Sie fliegen, sie fallen, sie stürzen ab und steigen immer wieder
              zurück ins Cockpit - solange bis unser Code stabil und robust für den Einsatz ist.</p></div>
          <div className="large-4 medium-12 small-12 columns" data-equalizer-watch>
            <h3>Bleeding edge</h3>

            <p>Unsere Truppe ist dem Gegner immer einen Schritt voraus. Um das auch in Zukunft zu sein, halten wir
              regelmäßige Sessions, um auf dem neuesten Stand zu bleiben. Codename: Fun Friday.</p>
          </div>
        </div>
      </div>
    );
  }
}