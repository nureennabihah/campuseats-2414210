import { useCart } from "../hooks/useCart.js";

function OrdersPage() {
  const { orders } = useCart();

  if (orders.length === 0) {
    return <p>No orders yet.</p>;
  }

  return (
    <section>
      <h2>My Orders</h2>
      {orders.map((order) => (
        <div key={order.id} className="card">
          <p>
            {order.name}, pickup at {order.pickupTime} (Mahallah{" "}
            {order.mahallah})
          </p>
          <p>Total: RM {order.total.toFixed(2)}</p>
        </div>
      ))}
    </section>
  );
}

export default OrdersPage;
