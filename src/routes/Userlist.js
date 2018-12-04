import React from 'react';
import Hello from './Hello';
import Liquid from './Liquid';
import Clock from './Clock';
import ToggleDiv from './ToggleDiv';
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

    let water = {
      name: 'Water',
      freezing: 32,
      boiling: 212
    }

    let ethanol = {
      name: 'Ethanol',
      freezing: -173.2,
      boiling: 173.1
    }

    var listHTML = list.map((value, index) => {
      return <li className="list-group-item" key={index}>{value}</li>;
    })

    return (
      <div className="row text-center">
        <ul className="list-group custom-list">
          {listHTML}
          <li className="list-group-item"> <Liquid /> </li>
          <li className="list-group-item"> <strong className="text-success">Water: </strong> <Liquid config={water} /> </li>
          <li className="list-group-item"> <strong className="text-danger">Ethanol: </strong> <Liquid config={ethanol} /> </li>
          <li className="list-group-item"> <Clock /> </li>
          <li className="list-group-item"> <ToggleDiv /></li>
        </ul>
      </div>
    )
  }
}

export default UserList;