import { createStore } from "redux";
import bankReducer from "./bankReducer";

const store = createStore(bankReducer);

export default store;