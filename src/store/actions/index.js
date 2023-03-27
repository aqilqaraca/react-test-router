import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCT } from "./types";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: productId,
  };
};

export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    payload: product,
  };
};
