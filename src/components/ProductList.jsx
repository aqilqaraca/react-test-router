import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => state.filteredData);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Photo</th>
          <th>Rating</th>
          <th>Stock</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
