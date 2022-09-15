import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./reducers/urlReducer";
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
    url: urlReducer,
  },
});

export default store;
