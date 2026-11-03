import { useEffect, useState } from "react";

export function useVendors() {
  // Moved from App.jsx (B1)
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0); // bump it to fetch again

  // B2(W3): fetch the vendors from the mpock API.
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

  const reload = () => setReloadKey((k) => k + 1);

  return { vendors, loading, error, reload };
}
