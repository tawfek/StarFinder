import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer);

store.subscribe(() => {
  const dark = store.getState().darkTheme;
  localStorage.setItem("theme", dark);
});

export default store;
