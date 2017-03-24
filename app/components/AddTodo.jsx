var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var todoItem = this.refs.todo.value;

    if (todoItem.length > 0) {
      this.refs.todo.value = '';
      this.props.onSetTodo(todoItem);
    } else {
      this.refs.todo.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="todo" placeholder="Enter new to-do item"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
