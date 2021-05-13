import {createStore,combineReducers} from 'redux';

import item from './Reducers/reducer';


const rootReducer=combineReducers({
    item
})

const store=createStore(rootReducer);


export default store;
