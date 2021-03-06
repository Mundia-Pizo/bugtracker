import rootReducer from './reducers/rootReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';




// const middleware = applyMiddleware([thunk]);
const initialState={};
const middleware = [thunk];
const store =createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );
export default store;


