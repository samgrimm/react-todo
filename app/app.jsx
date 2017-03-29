var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var Main = require('Main');
import Login from 'Login';
import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');



store.dispatch(actions.startAddTodos());

// LOAD foundation

$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
