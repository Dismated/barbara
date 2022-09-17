import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";
import folderService from "../services/folders";

const changeProduct = (product) => {
  const updatedNumber = product.product.quantity + product.num;
  const notNegativeNumber = updatedNumber < 0 ? 0 : updatedNumber;
  const changedProduct = {
    ...product.product,
    quantity: notNegativeNumber,
  };
  return changedProduct;
};

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProduct(state, action) {
      return action.payload.products;
    },
    appendProduct(state, action) {
      state.push(action.payload);
    },
    updateProduct(state, action) {
      return state.map((e) =>
        e._id === action.payload._id ? action.payload : e
      );
    },
  },
});

export const { appendProduct, updateProduct, setProduct } =
  productSlice.actions;

export const initializeProduct = (id) => {
  return async (dispatch) => {
    const folders = await folderService.getAll();
    const foundFolder = await folders.find((e) => e._id === id);
    dispatch(setProduct(foundFolder));
  };
};
export const createProduct = (content, folderId) => {
  return async (dispatch) => {
    const newProduct = await noteService.create({ content, folderId });
    dispatch(appendProduct(newProduct));
  };
};
export const changedQuantity = (product) => {
  return async (dispatch) => {
    const changedProduct = changeProduct(product);
    const updatedProduct = await noteService.update(
      product.product._id,
      changedProduct
    );
    dispatch(updateProduct(updatedProduct));
  };
};
export const removeProduct = (id, folderId) => {
  return async (dispatch) => {
    await noteService.remove(id);
    dispatch(initializeProduct(folderId));
  };
};

export default productSlice.reducer;
