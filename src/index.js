// Route config
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './bootstrap.min.css';


// const app = () => {
//   <Router>
//     <Suspense fallback={<div>Loading....</div>}>
//       <Switch>
//         <Route exact path="/" component={Hello} />
//         <Route path="/user-list" component={Userlist} />
//       </Switch>
//     </Suspense>
//   </Router>
// }

ReactDOM.render(
  <Router>
    <App/>
  </Router>, document.getElementById('root')
)