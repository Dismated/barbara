import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./reducers/urlReducer";
import mainProductReducer from "./reducers/mainProductReducer";
import productReducer from "./reducers/productReducer";
import promptReducer from "./reducers/promptReducer";
import suggestionReducer from "./reducers/suggestionReducer";
import folderReducer from "./reducers/folderReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    prompt: promptReducer,
    suggestion: suggestionReducer,
    mainProduct: mainProductReducer,
    url: urlReducer,
    folder: folderReducer,
  },
});

export default store;
