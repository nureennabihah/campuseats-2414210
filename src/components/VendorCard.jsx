function VendorCard() {
  const vendor = {
    name: "Kafe Mahallah Asiah",
    location: "Mahallah Asiah, Block A",
    openHours: "8:00 AM - 10:00 PM",
    isOpen: true,
  };

  return (
    <article className="card vendor-card">
      <div className="thumb" aria-hidden="true">
        {vendor.name.charAt(0)}
      </div>
      <div>
        <h2>{vendor.nameme}</h2>
        <p className="muted">{vendor.location}</p>
        <p className="muted">Open: {vendor.openHours}</p>
        <span className={vendor.isOpen ? "status open" : "status closed"}>
          {vendor.isOpen ? "Open now" : "Closed"}
        </span>
      </div>
    </article>
  );
}

export default VendorCard;
