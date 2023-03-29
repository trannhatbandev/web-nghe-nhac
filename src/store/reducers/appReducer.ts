import actionTypes from '../actions/actionsTypes';
import {
  actionAppReducer,
  typeAppReducer,
  typeInitState,
} from '../../util/constant/type';

const initState: typeInitState = {
  homeData: [],
  test: 'Hello 123',
};

const appReducer: typeAppReducer = (
  state = initState,
  action: actionAppReducer
) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return state;
    default:
      return state;
  }
};

export default appReducer;
