import { combineReducers, createStore } from "redux";
import { bookingTicketReducer } from "./reducers/bookingTicketReducer";

const rootReducer = combineReducers({
    //Các state cần lưu trữ trên store
    // bookingTicketReducer: bookingTicketReducer
    bookingTicketReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());