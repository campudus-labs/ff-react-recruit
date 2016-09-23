import React, {Component} from 'react';
var EventBus = require('vertx3-eventbus-client');

export default class Visitor extends Component {

  eb = new EventBus('http://localhost:8080/eventbus');

  constructor(props) {
    super(props);
    this.state = {
      "messages" : []
    }
  }

  receivedMessage(message) {
    const self = this;

    self.setState({
      "messages" : [
        'received a message: ' + JSON.stringify(message),
        ...self.state.messages
      ]
    });
  }

  componentWillMount() {
    const eb = this.eb;
    const self = this;

    eb.onopen = function () {
      var uuid = "a" + Math.random() + Math.random();

      // set a handler to receive a message
      eb.registerHandler('heartbeats', function (error, message) {
        self.receivedMessage(message);
      });

      eb.send('heartbeat', {'uuid' : uuid});
      eb.send('heartbeat', {'uuid' : uuid});
      eb.send('heartbeat', {'uuid' : uuid});
      eb.send('heartbeat', {'uuid' : uuid});
    };
  }

  render() {
    return (
      <div>
        {this.state.messages.map((message, idx) => {
          return <p key={idx}>{message}</p>
        })}
      </div>
    );
  }
}