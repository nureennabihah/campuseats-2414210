import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section>
      <h2>404</h2>
      <p>No page here.</p>
      <Link to="/">Back to vendors</Link>
    </section>
  );
}

export default NotFoundPage;
