import { useEffect, useRef, useState } from "react";

/* ---------- Custom Hook ---------- */
function useLocateUser() {
  const [location, setLocation] = useState(null);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  const isFirstCall = useRef(true);

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });

    if (isFirstCall.current) {
      setCount(1); // initial fetch
      isFirstCall.current = false;
    } else {
      setCount((prev) => prev + 1); // refresh clicks
    }

    setError(null);
  };

  const handleError = () => {
    setError("Location access denied or unavailable");
  };

  const refreshLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  useEffect(() => {
    refreshLocation();
  }, []);

  return { location, count, error, refreshLocation };
}

/* ---------- UI ---------- */
const LocationDisplay = () => {
  const { location, count, error, refreshLocation } = useLocateUser();

  const openInGoogleMaps = () => {
    if (!location) return;

    const { latitude, longitude } = location;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
      "_blank"
    );
  };

  if (error) return <p>{error}</p>;
  if (!location) return <p>Locating...</p>;

  return (
    <div style={{ padding: "16px" }}>
      <p>
        <strong>Latitude:</strong> {location.latitude}
      </p>
      <p>
        <strong>Longitude:</strong> {location.longitude}
      </p>
      <p>
        <strong>Location updates:</strong> {count}
      </p>

      <button onClick={refreshLocation}>Refresh</button>
      <button onClick={openInGoogleMaps} style={{ marginLeft: "8px" }}>
        View on Google Maps
      </button>
    </div>
  );
};

/* ---------- App ---------- */
export default function App() {
  return (
    <>
      <h1>User Location</h1>
      <LocationDisplay />
    </>
  );
}
