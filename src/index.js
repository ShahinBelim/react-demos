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
                <li className="list-group-item"> <NameForm /> </li>
                <li className="list-group-item"> <Water /> </li>
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

  constructor(props) {
    super(props);
    this.state = { currntTemp: 10 };
    this.setTemprature = this.setTemprature.bind(this);
    this.changeAreaValue = this.changeAreaValue.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  setTemprature(event) {
    this.setState({
      currntTemp: event.target.value
    })
  }

  changeAreaValue(event) {
    this.setState({ textareaValue: event.target.value })
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(">>>> Form Submit >>>>>");
  }

  changeColor(event) {
    this.setState({ color: event.target.value })
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
      <form onSubmit={this.submitHandler}>
        <div className="d-inline">
          <input type="text" onChange={this.setTemprature} value={this.state.currntTemp} />
          <p>{this.state.currntTemp}F, water is considered to be a {stateOfWater} state of matter </p>
          <textarea value={this.state.textareaValue} onChange={this.changeAreaValue} /><br/>
          <label>
            Select yout color
            <select value={this.state.color} onChange={this.changeColor}>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="pink">pPink</option>
            </select>

          </label>
          <div> <input type="submit" value="Submit" /> </div>
        </div>
        <p>Selected color: {this.state.color} </p>
      </form>
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

// Form example
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        value : {this.state.value}
      </div>
    );
  }
}


setInterval(createDom, 1000)