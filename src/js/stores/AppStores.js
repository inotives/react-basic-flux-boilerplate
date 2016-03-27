var AppDispatcher = require('../dispatchers/AppDispatchers'),
    AppConstants = require('../constants/AppConstants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

// standard storage array
var _item  = []

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(){
        this.on('change', callback);
    },
    removeChangeListener: function(){
        this.removeListener('change', callaback);
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){

    }
    return true;
});

module.exports = AppStore;
