import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.photo}</td>
      <td>{product.rating}</td>
      <td>{product.stock}</td>
      <td>{product.category}</td>
      <td>
        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ProductItem;
