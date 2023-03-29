import { CombinedState, Reducer, Store, EmptyObject } from 'redux';
import rootReducer from '../store/reducers/rootReducer';

export type actionAppReducer = {
  type: string;
};

export type typeInitState =  {
    homeData: never[];
    test: string;
}

export type typeReduxConfig = () => Store<EmptyObject & {app: typeInitState}, actionAppReducer> & {dispatch: unknown}

export type typeAppReducer = (state: typeInitState | undefined, action: actionAppReducer) => typeInitState

export type typeRootReducer =  Reducer<CombinedState<{app: typeInitState}>, actionAppReducer>

export type RootState = ReturnType<typeof rootReducer>

export interface IRootReducer {
    app: typeInitState
}
