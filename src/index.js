import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Root from "./routes/root";
import "./index.css";
import SearchField from "./components/SearchField";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root
        children={
          <div>
            <SearchField />
            <ProductList />
          </div>
        }
      />
    ),
  },
  {
    path: "/add",
    element: <Root children={<AddProductForm />} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
