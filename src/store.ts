import {createStore, combineReducers, Store, applyMiddleware} from 'redux';
import *  as fromUserReducer from './commons/containers/loginPage/reducer';
import createSagaMiddleware  from 'redux-saga';
import {all, fork } from 'redux-saga/effects';
import {composeWithDevTools} from 'redux-devtools-extension';
import { routerMiddleware, connectRouter, RouterState } from 'connected-react-router';
import { History , createBrowserHistory} from 'history';
import UserSaga from './commons/containers/loginPage/saga';

export interface  ApplicationState{
    user : fromUserReducer.State  ,
    router: RouterState
 
}


export const createRootReducer = (history: History) =>
  combineReducers<ApplicationState>({
    user: fromUserReducer.UserReducer,
    router: connectRouter(history)
  })
// export const reducer = combineReducers<State>({
//     user: fromUserReducer.UserReducer,
//     router: connectRouter(history)
// })


export function* rootSaga() {
    yield all([fork(UserSaga)])
  }

export  function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
    // create the composing function for our middlewares
    const composeEnhancers = composeWithDevTools({})
    // create the redux-saga middleware
    const sagaMiddleware = createSagaMiddleware()
  
    // We'll create our store with the combined reducers/sagas, and the initial Redux state that
    // we'll be passing from our entry point.
    const store = createStore(
        createRootReducer(history),
      initialState,
      composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    )
  
    // Don't forget to run the root saga, and return the store object.
    sagaMiddleware.run(rootSaga)
    return store
  }

const initialState = window.INITIAL_REDUX_STATE;
export const history = createBrowserHistory();

const store = configureStore(history, initialState);
export  default store;
