var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the kitchen'
        }, {
          id: 3,
          text: 'Play with Tito'
        }, {
          id: 4,
          text: 'Go swimming'
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div className="card">
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
