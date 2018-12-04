import React from 'react';
import FormElements from './FormElement';

// Liquid Component
class Liquid extends React.Component {

  constructor(props) {
    super(props);
    this.setTemprature = this.setTemprature.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeAreaValue = this.changeAreaValue.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.state = { currntTemp: 10, changeColor: this.changeColor, color: 'green' };
  }

  setTemprature(event) {
    this.setState({
      currntTemp: event.target.value
    })
  }

  changeAreaValue(event) {
    this.setState({ textareaValue: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(">>>> Form Submit >>>>>");
  }

  changeColor(event) {
    console.log("changeColor")
    this.setState({ color: event.target.value })
  }

  render() {
    var stateOfWater;
    if (this.state.currntTemp <= (this.props.config ? this.props.config.freezing : 32)) {
      stateOfWater = 'Solid';
    } else if (this.state.currntTemp >= (this.props.config ? this.props.config.boiling : 212)) {
      stateOfWater = 'Gas';
    } else {
      stateOfWater = 'Liquid';
    }

    // Conditional Rendering and Extracting Components
    // Note: Always split components into a smaller components
    let formElements;
    if (!this.props.config) {
      formElements = <FormElements data={this.state} ></FormElements>
    }

    return (
      <form onSubmit={this.submitHandler}>
        <div className="d-inline">
          <input type="text" onChange={this.setTemprature} value={this.state.currntTemp} />
          <p>{this.state.currntTemp}F, {this.props.config ? this.props.config.name : 'Water'} is considered to be a {stateOfWater} state of matter </p>
          {formElements}
        </div>
      </form>
    );
  }
}


export default Liquid;