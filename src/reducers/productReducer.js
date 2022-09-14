import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";

const changeProduct = (product) => {
  const updatedNumber = product.func(product.product.quantity, product.num);
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
    updateQuantity(state, action) {
      return state.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
    },
  },
});

export const { appendProduct, updateQuantity, setProduct } =
  productSlice.actions;

export const initializeProduct = () => {
  return async (dispatch) => {
    const products = await noteService.getAll();
    dispatch(setProduct(products));
  };
};
export const createProduct = (content) => {
  return async (dispatch) => {
    const newProduct = await noteService.create(content);
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
    dispatch(updateQuantity(updatedProduct));
  };
};

export default productSlice.reducer;
