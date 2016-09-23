import React, { Component } from 'react';

export default class Character extends Component {
  render() {
    return (
      <div className="character row">
        <div className="large-12 columns">
          <h2>Wähle Deine Klasse!</h2>
        </div>
        <div className="large-4 columns kind" id="frontend-ninja">

          <div className="avatar">
            <div className="frontend-ninja"></div>
          </div>

          <i className="icon-check"></i>

          <h3>Fearless Frontend Ninja</h3>

          <p>Mit einem scharfsinnigen Gespür für Ästhetik ist Dein Einsatzgebiet die vorderste Front. Mit Konzept und Design
            ziehst Du in das Schlachtfeld, um Deinen schlimmsten Gegner zu bezwingen: Den Internet Explorer.</p>

        </div>
        <div className="large-4 columns kind" id="full-stack">
          <div className="avatar">
            <div className="full-stack"></div>
          </div>
          <i className="icon-check"></i>

          <h3>Full Stack Hacker</h3>

          <p>Du bist unaufhaltbar. Egal, ob Bugs das Frontend zerfressen oder das Backend unter schwerem Beschuss steht. Du
            neutralisierst jede Gefahr die Dir in den Weg kommt und stürzt Dich gnadenlos in die nächste Mission.
          </p>

        </div>
        <div className="large-4 columns kind" id="backend-bear">
          <div className="avatar">
            <div className="backend-bear"></div>
          </div>
          <i className="icon-check"></i>

          <h3>Bashing Backend Bear</h3>

          <p>Mit Tastatur und Terminal zerhackst Du Bugs als gäbe es kein Morgen. Die Maus benutzt Du nur im Notfall und
            bist die rettende Unterstützung, wenn im Frontend mal wieder schwere Waffen benötigt werden.
          </p>

        </div>
      </div>
    );
  }
}