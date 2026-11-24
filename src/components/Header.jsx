import { useCart } from "../hooks/useCart.js";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth.js";

// vendors and cart are button that tell App which view to show.
function Header() {
  // const cartCount = 0; // becomes state in Part C

  const { count } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/");
  }

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
        {user ? (
          <>
            <span className="user-name">
              Hi, {user.displayName || user.email}
            </span>
            <button type="button" className="link" onClick={handleLogout}>
              Log out
            </button>
          </>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
