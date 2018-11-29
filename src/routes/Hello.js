import React from 'react';

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

export default Hello;