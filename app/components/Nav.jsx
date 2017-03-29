var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Another Todo app</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Login</IndexLink>
            </li>
            <li>
              <Link to="/todos" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Todos</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by Samantha Cabral</li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
