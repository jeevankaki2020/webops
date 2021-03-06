import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link,Switch, BrowserRouter as Router} from 'react-router-dom';
import List from './components/List'

const routing= (
  <Router>
   <Switch>

   <Route path="/" exact component={App}/>
  <Route path="/List" exact component={List}/>
  </Switch>
  </Router>
);

ReactDOM.render(routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
