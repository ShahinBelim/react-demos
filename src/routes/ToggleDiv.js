import React from 'react';

class ToggleDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: false
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({ showWarning: !prevState.showWarning }))
  }

  render() {
    return (
      <div>
        <button className="mb-2" onClick={this.handleToggleClick}>Show Warning</button>
        <WarningBanner warn={this.state.showWarning} />
      </div>
    )
  }
}

function WarningBanner(props) {
  console.log(" props : ", props)

  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}

export default ToggleDiv;