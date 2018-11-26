import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';

// Hello Component
class Hello extends React.Component {
  render() {
    let targetOfGreeting = "Haters!"
    let styleClass = 'text-success';
    return <div className="container">
      <h3 className="text-center">Hello,
          <span className={styleClass}>{targetOfGreeting}!</span>
      </h3>
    </div>;
  }
}

// UserList Component
class UserList extends React.Component {
  renderHello() {
    return <Hello />
  }
  render() {
    var list = [
      'Cras justo odio',
      'Dapibus ac facilisis in',
      'Morbi leo risus',
      'Porta ac consectetur ac',
      'Vestibulum at eros'
    ]

    var listHTML = list.map((value, index) => {
      return <li className="list-group-item" key={index}>{value}</li>;
    })

    return (
      <main role="main">
        <div className="jumbotron custom">
          {this.renderHello()}
          <div className="container">
            <div className="row text-center">
              <ul className="list-group custom-list">
                {listHTML}
                {/* <li className="list-group custom-list"> <Water /> </li> */}
                <li className="list-group custom-list"> <Clock /> </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

// Water Component
class Water extends React.Component {
  getInitialState() {
    return {
      currntTemp: 10
    };
  }
  render() {
    var stateOfWater;
    if (this.state.currntTemp <= 32) {
      stateOfWater = 'Solid';
    } else if (this.state.currntTemp >= 212) {
      stateOfWater = 'Gas';
    } else {
      stateOfWater = 'Liquid';
    }
    return (
      <div>
        <p>{this.state.currntTemp}F, water is considered to be a {stateOfWater} state of matter </p>
      </div>
    );
  }
}

// Clock
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  // Method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    //this.state.date = new Date(); // Don't use this :  Optimized components might not re-render if you do
    // Rerender component if property changes
    this.setState({
      date: new Date()
    });
  }

  render() {
    //console.log("--- call render ---");
    return (
      <div>
        <h3> Current Time : {this.state.date.toLocaleTimeString()} </h3>
      </div>
    )
  }
}

function createDom() {
  ReactDOM.render(<UserList />, document.getElementById('root'))
}

setInterval(createDom, 1000)