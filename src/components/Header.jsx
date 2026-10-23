// vendors and cart are button that tell App which view to show.
function Header({ cartCount, onShowMenu, onShowCart }) {
  // const cartCount = 0; // becomes state in Part C

  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>
      <nav className="nav">
        <button type="button" className="link" onClick={onShowMenu}>
          Vendors
        </button>
        <button type="button" className="link cart" onClick={onShowCart}>
          {/*cartCount is the total quantity, computed in App */}
          Cart <span className="badge">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
