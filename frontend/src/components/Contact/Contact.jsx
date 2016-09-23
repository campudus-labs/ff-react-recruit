import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact row">
        <div className="large-12 columns">
          <h2>Aufnahme&shy;protokoll</h2>

          <p>Bitte fülle die untenstehenden Daten aus. Wir werden uns anschließend mit Dir in Verbindung setzen.</p>
        </div>

        <div className="large-12 columns">
          <form id="recruitment">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required="required" placeholder="John Smith"/>
            </div>
            <div>
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email" id="email" required="required" placeholder="your-name@awesome.corp"/>
            </div>
            <div>
              <label htmlFor="url">Portfolio URL*</label>
              <input type="url" name="url" id="url" placeholder="Optional: https://github.com/Narigo"/>

              <p className="small">* Git-Repository oder Webseite, auf der Deine derzeitigen Erfolge zu sehen sind.</p>
            </div>
            <button type="submit">Bewerben <i className="icon-arrow-right"/></button>
          </form>
        </div>
      </div>
    );
  }
}