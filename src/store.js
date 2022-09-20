import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "./reducers/folderReducer";
import mainProductReducer from "./reducers/mainProductReducer";
import productReducer from "./reducers/productReducer";
import productWindowReducer from "./reducers/productWindowReducer";
import promptReducer from "./reducers/promptReducer";
import suggestionReducer from "./reducers/suggestionReducer";
import urlReducer from "./reducers/urlReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    prompt: promptReducer,
    suggestion: suggestionReducer,
    mainProduct: mainProductReducer,
    url: urlReducer,
    folder: folderReducer,
    productWindow: productWindowReducer,
  },
});

export default store;
