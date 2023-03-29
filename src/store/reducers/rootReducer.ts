import appReducer from './appReducer';
import { combineReducers } from 'redux';
import { typeRootReducer } from '../../constant/constant';

const rootReducer= combineReducers({app: appReducer});

export default rootReducer;
