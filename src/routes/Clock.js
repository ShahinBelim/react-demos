import React from 'react';

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
    return (
      <div>
        <h3> Current Time : {this.state.date.toLocaleTimeString()} </h3>
      </div>
    )
  }
}

export default Clock;