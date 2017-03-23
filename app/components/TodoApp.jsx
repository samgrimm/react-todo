var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div className="card">
        <TodoList todos={todos}/>
        <AddTodo onSetTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
