import { configureStore } from "@reduxjs/toolkit";
import mainProductReducer from "./reducers/mainProductReducer";
import productReducer from "./reducers/productReducer";
import promptReducer from "./reducers/promptReducer";
import suggestionReducer from "./reducers/suggestionReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    prompt: promptReducer,
    suggestion: suggestionReducer,
    mainProduct: mainProductReducer,
  },
});

export default store;
