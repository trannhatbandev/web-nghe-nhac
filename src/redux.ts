import rootReducer from './store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { typeReduxConfig } from './util/constant/type';
const reduxConfig = () => createStore(rootReducer, applyMiddleware(thunk));
export default reduxConfig;
