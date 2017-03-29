var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <div>
          {props.children}
        </div>
      </div>

    </div>
  );
}

module.exports = Main;
