import { createStore, combineReducers } from "redux";
import employeeReducer from "./features/employeeReducer";
import modelReducer from "./features/modelReducer";

const rootReducer = combineReducers({
    empDetails: employeeReducer,
    modelShow:modelReducer
});

const store = createStore(rootReducer);

export default store;