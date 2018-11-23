import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
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
              <ul className="list-group custom-list"> {listHTML} </ul>
            </div>
          </div>
        </div>
      </main>
    )

  }
}

ReactDOM.render(<UserList />, document.getElementById('root'));

