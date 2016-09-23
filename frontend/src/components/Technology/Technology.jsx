import React, { Component } from 'react';

export default class Technology extends Component {
  render() {
    return (
      <div className="technology row" data-equalizer>
        <div className="large-12 columns">
          <h2>Wähle Deine Ausrüstung</h2>

          <p className="intro">Das wichtigste für unsere Rekruten ist die Bereitschaft Neues zu lernen. Welche der folgenden
            Technologien kennst Du bereits oder möchtest Du bei uns lernen?</p>

          <ul className="small-block-grid-1 medium-block-grid-2 large-block-grid-4">
            <li data-equalizer-watch className="tech-item" id="javascript"><i className="icon-javascript"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>JavaScript</h3>

              <div className="description">Unsere Grundausstattung und in vielen Bereichen super einsetzbar.</div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="html5"><i className="icon-html5"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>HTML 5</h3>

              <div className="description">Irgendwann muss man auch mal loslassen und alte Browser aus dem Netz verbannen.</div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="css3"><i className="icon-css3"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>CSS3/Sass</h3>

              <div className="description">Bringt den fancy Style in das Frontend. Designs umsetzen wie es sein sollte.</div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="angular-js"><i className="icon-angularJs"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>Angular JS</h3>

              <div className="description">Schwere Geschütze sind teilweise auch im Frontend sinnvoll. Angular JS bietet für
                Single-Page-Apps eine sehr gute Basis.
              </div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="git"><i className="icon-github5"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>Git</h3>

              <div className="description">Versionskontrolle vom Feinsten und dank Pull Requests das beste Mittel, um Code
                Reviews zu ermöglichen.
              </div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="ios"><i className="icon-apple"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>iOS</h3>

              <div className="description">Auch vor Monstern wie Obj-C machen wir nicht halt.</div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="android"><i className="icon-android"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>Android</h3>

              <div className="description">Manch spezieller Einsatz verlangt nativen Code.</div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="cordova"><i className="icon-cordova"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>Cordova/PhoneGap</h3>

              <div className="description">Für die schnelle Umsetzung auf verschiedenen Endgeräten arbeiten wir mit unserer
                liebsten Technologie: Dem Web.
              </div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="sql"><i className="icon-database"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>SQL</h3>

              <div className="description">Sichert unsere Daten bei einigen unserer Produkte.</div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="shell"><i className="icon-terminal"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>Shell</h3>

              <div className="description">Kleine Skripte helfen uns bei der automatisierten Lösung von Alltagsproblemen.</div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="php"><i className="icon-php"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>PHP</h3>

              <div className="description">In manchen Fällen greifen wir auf das fast überall verfügbare PHP zurück.</div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="gulp"><i className="icon-gulp"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>Gulp</h3>

              <div className="description">Build-Tool für den Skripter.</div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="nodejs"><i className="icon-nodeJs"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>Node.JS</h3>

              <div className="description">Schnelle Prototypen und magische Skripte lassen wir hiermit gerne entstehen.</div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="vertx"><i className="icon-vertx"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>Vert.x</h3>

              <div className="description">Als Contributor helfen wir Vert.x zu verbessern. Polyglotes, event-driven Framework
                ala Node.JS mit dem sich allerlei Problemstellungen lösen lassen.
              </div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="scala"><i className="icon-scala"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>Scala</h3>

              <div className="description">Funktionale Programmierung trifft auf Objekte. Im Backend unser beliebtestes
                Werkzeug.
              </div>
              <i className="icon-check"></i></li>
            <li data-equalizer-watch className="tech-item" id="wordpress"><i className="icon-wordpress"></i>
              <img className="shadow" src="/images/recruit/shadow.png"/>

              <h3>Wordpress</h3>

              <div className="description">Hilft uns, Webseiten speziell an die Wünsche der Kunden anzupassen.</div>
              <i className="icon-check"></i></li>
          </ul>
        </div>
      </div>
    );
  }
}