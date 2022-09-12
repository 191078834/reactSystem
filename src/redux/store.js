import { legacy_createStore as createStore } from "redux";
import countRedux from "./reducers";

const store = createStore(countRedux);

export default store;
