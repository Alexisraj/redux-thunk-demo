import rootReducer from "../src/reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const persistState = (state) => {
  const serializedState = JSON.stringify(state);
  if (serializedState) localStorage.setItem("state", serializedState);
};
const rehydrateState = () => {
  const localState = localStorage.getItem("state");
  if (!localStorage) return undefined;
  return JSON.parse(localState);
};

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState || rehydrateState(),
    applyMiddleware(thunk)
  );
  store.subscribe(() => persistState(store.getState()));
  return store;
}
