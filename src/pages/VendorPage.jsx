import { useParams, Link, useSearchParams } from "react-router";
import { useVendors } from "../hooks/useVendors.js";
import MenuList from "../components/MenuList.jsx";
import { Loading, ErrorMessage } from "../components/Status.jsx";
import { useNavigate } from "react-router";

function VendorPage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { vendors, loading, error, reload } = useVendors();

  // special feature (0)
  const query = searchParams.get("q") ?? "";

  function handleSearch(e) {
    const text = e.target.value;
    if (text === "") {
      setSearchParams({}, { replace: true }); // clean the URL when the box is empty
    } else {
      setSearchParams({ q: text }, { replace: true });
    }
  }

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  const vendor = vendors.find((v) => v.id === id);
  if (!vendor) return <p>Vendor not found</p>;

  const visibleMenu = vendor.menu.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section>
      <Link to="/" className="muted">
        ← Back to vendors
      </Link>
      <h2 className="section-title">Menu: {vendor.name}</h2>

      <input
        type="search"
        value={query}
        onChange={handleSearch}
        placeholder="Search menu by name..."
      />
      <p className="muted">{visibleMenu.length} item(s) found</p>

      <MenuList items={visibleMenu} />
    </section>
  );
}

export default VendorPage;
