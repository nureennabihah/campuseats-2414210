import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import MenuList from "./components/MenuList.jsx";
import VendorCard from "./components/VendorCard.jsx";
import Footer from "./components/Footer.jsx";
import CartPage from "./components/CartPage.jsx";
import { Loading, ErrorMessage } from "./components/Status.jsx";

function App() {
  // Fetched data : one piece of state for each situation
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0); // bump it to fetch again

  const [selectedVendorId, setSelectedVendorId] = useState(null);
  const [cart, setCart] = useState([]); // lines of {item, qty}
  const [view, setView] = useState("menu"); // 'menu' | 'cart' | 'done'
  const [lastOrder, setLastOrder] = useState(null);

  const [query, setQuery] = useState(""); // B6 (digit 0): search box text
  // B2: fetch the vendors from the mpock API.
  useEffect(() => {
    const controller = new AbortController();

    async function loadVendors() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/vendors.json", {
          signal: controller.signal,
        });

        // fetch foes not fail on a 404, so check res.ok
        if (!res.ok) {
          throw new Error("Failed to load vendors");
        }

        const data = await res.json();
        setVendors(data);
        // keep the vendor the user already picked
        setSelectedVendorId((current) => current ?? data[0]?.id ?? null);
      } catch (err) {
        // AbortError = cleanup cancelled an old request
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadVendors();

    // cancel an old request
    return () => controller.abort();
  }, [reloadKey]);

  // find the selected vendor on every render
  const selectedVendor = vendors.find(
    (vendor) => vendor.id === selectedVendorId,
  );

  const visibleMenu = selectedVendor
    ? selectedVendor.menu.filter((item) =>
        item.name.toLowerCase().includes(query.trim().toLowerCase()),
      )
    : [];

  // B3: a real cart. Adding am item already in the cart increases its qty.
  function handleAddToCart(item) {
    setCart((prevCart) => {
      const existingLine = prevCart.find((line) => line.item.id === item.id);

      if (existingLine) {
        // already in the cart: copy every line, and add 1 to the matching one
        return prevCart.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [...prevCart, { item, qty: 1 }];
    });
  }

  function handleChangeQty(itemId, delta) {
    setCart(
      (prevCart) =>
        prevCart
          .map((line) =>
            line.item.id === itemId ? { ...line, qty: line.qty + delta } : line,
          )
          .filter((line) => line.qty > 0), // qty 0 means the line disappears
    );
  }

  // keep every line except the one being removed
  function handleRemove(itemId) {
    setCart((prevCart) => prevCart.filter((line) => line.item.id !== itemId));
  }

  // B5: called by CheckoutForm once the form is valid
  function handlePlaceOrder(details) {
    // compute the total before clearing the cart, otherwise it would be RM 0.00
    const total = cart.reduce(
      (sum, line) => sum + line.item.price * line.qty,
      0,
    );

    setLastOrder({ ...details, total }); // save the order
    setCart([]); // clear the cart
    setView("done"); // show the order-placed view
  }

  // header badge: total quantity
  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0);

  // choose what to show from the view state
  let content;
  if (view === "cart") {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    );
    // B5: show pickup time and total
  } else if (view === "done") {
    content = (
      <section className="card">
        <h2>Order placed</h2>
        <p>
          Thank you, {lastOrder.name}. Pickup at {lastOrder.pickupTime}{" "}
          (Mahallah {lastOrder.mahallah}). Total RM {lastOrder.total.toFixed(2)}
          .
        </p>
        <button className="btn" onClick={() => setView("menu")}>
          Back to menus
        </button>
      </section>
    );
  } else if (loading) {
    content = <Loading />;
  } else if (error) {
    content = (
      <ErrorMessage
        message={error}
        onRetry={() => setReloadKey((k) => k + 1)}
      />
    );
  } else {
    // Menu view: Week 2 vendor cards + MenuList
    content = (
      <>
        <section>
          <h2 className="section-title">Choose a vendor</h2>
          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={vendor.id === selectedVendorId}
                onSelect={setSelectedVendorId}
              />
            ))}
          </div>
        </section>

        {selectedVendor && (
          <section>
            <h2 className="section-title">Menu: {selectedVendor.name}</h2>

            {/* Controlled input; it shows 'query', typing updates 'query' */}
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search menu by name..."
            />
            <p className="muted">{visibleMenu.length} item(s) found</p>

            <MenuList items={visibleMenu} onAdd={handleAddToCart} />
          </section>
        )}
      </>
    );
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView("menu")}
        onShowCart={() => setView("cart")}
      />
      <main className="container">{content}</main>
      <Footer />
    </>
  );
}

export default App;
