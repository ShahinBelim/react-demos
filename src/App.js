import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Loadable from 'react-loadable';
//const Hello = lazy(() => import('./routes/Hello'));

// Static loading component
// import Hello from './routes/Hello';
// import UserList from './routes/Userlist';
// import Forms from './routes/Forms';
// import NotFound from './routes/NotFound';

// Lazy loading component using asyncComponent
// import asyncComponent from './components/AsyncComponent';
// const asyncHello = asyncComponent(() => import("./routes/Hello"));
// const asyncUserList = asyncComponent(() => import('./routes/Userlist'));
// const asyncForms = asyncComponent(() => import('./routes/Forms'));
// const asyncNotFound = asyncComponent(() => import('./routes/NotFound'));

// Lazy loading component using Loadable

const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div> Loading....... </div>;
  }
  // Handle error state
  if (error) {
    return <div> Sorry, there was a problem loading page. </div>;
  }
  else {
    return null;
  }
}


const asyncHello = Loadable({
  loader: () => import("./routes/Hello"),
  loading: MyLoadingComponent
})
const asyncUserList = Loadable({
  loader: () => import("./routes/Userlist"),
  loading: MyLoadingComponent
})
const asyncForms = Loadable({
  loader: () => import('./routes/Forms'),
  loading: MyLoadingComponent
});
const asyncNotFound = Loadable({
  loader: () => import('./routes/NotFound'),
  loading: MyLoadingComponent
})
class App extends Component {
  constructor(props) {
    super(props);
    console.log("-App-");
  }


  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          <li><Link to="/">Back To Home Page</Link></li>
          <li><Link to="/hello">Hello</Link> </li>
          <li><Link to="/list"> List page </Link> </li>
          <li><Link to="/list/form-demo">Form demo page</Link></li>
        </ul>

        <Switch>
          {/* <Suspense fallback={<div>Loading....</div>}> */}

          {/* Lazy loading component */}
          <Route exact path="/" component={asyncHello} />
          <Route path="/hello" component={asyncHello} />
          <Route exact path="/list" component={asyncUserList} />
          <Route exact path='/list/form-demo' component={asyncForms} />
          <Route component={asyncNotFound}></Route>

          {/* Static loading component */}
          {/* <Route path="/hello" component={Hello} />
          <Route exact path="/list" component={UserList} />
          <Route exact path='/list/form-demo' component={Forms} />
          <Route component={NotFound}></Route> */}


          {/* The exact param disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url. */}
          {/* </Suspense> */}
        </Switch>
      </div>
    )
  }
}

export default App;
