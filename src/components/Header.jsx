import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Product List</Link>
      <Link to="/add">Add product</Link>
    </header>
  );
};

export default Header;
