import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as Authreducer } from "./Authreducer/reducer";
import { BatchReducer,SectionReducer,TypeReducer,UserReducer,CategoeryReducer } from "./SelectionReducer/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootreducer = combineReducers({ Authreducer ,BatchReducer,SectionReducer,TypeReducer,UserReducer,CategoeryReducer});
export const store = legacy_createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
