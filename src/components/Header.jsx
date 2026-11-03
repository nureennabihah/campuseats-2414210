import { useCart } from "../hooks/useCart.js";
import { NavLink } from "react-router";

// vendors and cart are button that tell App which view to show.
function Header() {
  // const cartCount = 0; // becomes state in Part C

  const { count } = useCart();

  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>
      <nav className="nav">
        <NavLink to="/" end className="link">
          Vendors
        </NavLink>
        <NavLink to="/orders" className="link">
          My Orders
        </NavLink>
        <NavLink to="/cart" className="link cart">
          Cart <span className="badge">{count}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
