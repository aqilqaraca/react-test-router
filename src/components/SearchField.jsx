import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store/actions";

const SearchField = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const filteredData = products.filter((item) =>
      item.name
        .toLowerCase()
        .startsWith(event.target.value.toLowerCase().trim())
    );
    if (event.target.value === "") {
      dispatch(setProduct(products));
    } else {
      dispatch(setProduct(filteredData));
    }
  };

  return (
    <div className="search-field">
      <input
        type="text"
        placeholder="Search by name or category"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchField;
