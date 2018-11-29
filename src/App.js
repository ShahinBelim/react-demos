import React, { Component, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

//const Hello = lazy(() => import('./routes/Hello'));
import Hello from './routes/Hello';
import UserList from './routes/Userlist';
import Forms from './routes/Forms';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          <li><Link to="/hello">Hello</Link> </li>
          <li><Link to="/list"> List page </Link> </li>
          <li><Link to="/form-demo">Form demo page</Link></li>
        </ul>

        <Switch>
          {/* <Suspense fallback={<div>Loading....</div>}> */}
          {/* <Route exact path="/" component={Hello} /> */}
          <Route path='/form-demo' component={Forms} />
          <Route path="/hello" component={Hello} />
          <Route path="/list" component={UserList} />
          {/* </Suspense> */}
        </Switch>
      </div>
    )
  }
}

export default App;
