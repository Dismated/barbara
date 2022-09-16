import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";
import folderService from "../services/folders";

const changeProduct = (product) => {
  const updatedNumber = product.product.quantity + product.num;
  const changedProduct = {
    ...product.product,
    quantity: updatedNumber,
  };
  return changedProduct;
};

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProduct(state, action) {
      return action.payload;
    },
    appendProduct(state, action) {
      state.push(action.payload);
    },
    updateProduct(state, action) {
      return state.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
    },
  },
});

export const { appendProduct, updateProduct, setProduct } =
  productSlice.actions;

export const initializeProduct = (id) => {
  return async (dispatch) => {
    const folders = await folderService.getAll();
    const foundFolder = await folders.find((e) => e.id === id);
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
      product.product.id,
      changedProduct
    );
    dispatch(updateProduct(updatedProduct));
  };
};
export const removeProduct = (id) => {
  return async (dispatch) => {
    await noteService.remove(id);
    dispatch(initializeProduct());
  };
};

export default productSlice.reducer;
