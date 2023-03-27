import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCT } from "./actions/types";

const initialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      description: "Product 1 Description",
      price: 9.99,
      photo: "Product 1 Photo",
      rating: 4,
      stock: 10,
      category: "Category 1",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Product 2 Description",
      price: 19.99,
      photo: "Product 2 Photo",
      rating: 3,
      stock: 5,
      category: "Category 2",
    },
  ],
  filteredData: [],
};

initialState.filteredData = [...initialState.products];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case SET_PRODUCT:
      return {
        ...state,
        filteredData: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
