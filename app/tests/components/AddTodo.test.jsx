var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onSetTodo if valid data', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onSetTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todo.value = 'Add another item';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith('Add another item');
  });

  it('should not call onSetTodo if invalid data', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onSetTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
