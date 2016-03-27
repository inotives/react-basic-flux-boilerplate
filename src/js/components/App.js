var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');
var Test = require('./Test');

//
function getAppState(){
  return {

  }
}

var App = React.createClass({
  getInitialState: function(){
    return getAppState();
  },
  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },
  componetUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },
  render: function(){
      return (
        <div>
          <Test testVal="this is test"/>
        </div>
      );
  },

  // update view state when change is received
  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
