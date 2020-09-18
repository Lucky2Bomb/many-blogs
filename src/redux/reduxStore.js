const { createStore, combineReducers } = require("redux");
const profileReducer = require('./profileReducer');
const headerReducer = require('./headerReducer');

let reducers = combineReducers({
    profile: profileReducer,
    header: headerReducer
});

let store = createStore(reducers);

export default store;