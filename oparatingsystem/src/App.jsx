import { useEffect, useState } from "react";

export default function HackerVision() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      const debugInfo = gl && gl.getExtension("WEBGL_debug_renderer_info");

      const gpu = debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        : "Classified GPU 🕵️";

      const connection = navigator.connection || {};

      setData({
        "🧠 Browser Brain": navigator.userAgent,
        "🖥️ Operating System": navigator.platform,
        "🏭 Browser Vendor": navigator.vendor,
        "🧩 Browser Engine": navigator.userAgent.includes("Chrome")
          ? "Blink Engine"
          : "Unknown Core",

        "🌍 Language Profile": navigator.languages.join(", "),
        "⏰ Timezone Leak": Intl.DateTimeFormat().resolvedOptions().timeZone,
        "⌛ Local Time Snapshot": new Date().toString(),

        "🖥️ Screen Resolution": `${screen.width} x ${screen.height}`,
        "🔍 Pixel Density": window.devicePixelRatio,
        "🎨 Color Depth": screen.colorDepth,

        "🧮 CPU Threads": navigator.hardwareConcurrency,
        "💾 RAM Estimate": navigator.deviceMemory
          ? `${navigator.deviceMemory} GB`
          : "Hidden",

        "🎮 GPU Identity": gpu,

        "📡 Network Type": connection.effectiveType || "Unknown",
        "⚡ Download Speed": connection.downlink
          ? `${connection.downlink} Mb/s`
          : "Measuring...",
        "📶 Online Status": navigator.onLine ? "ONLINE" : "OFFLINE",

        "🌙 Dark Mode": window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "ENABLED"
          : "DISABLED",
        "🧘 Reduced Motion": window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "YES"
          : "NO",

        "🖱️ Touch Support": "ontouchstart" in window ? "YES" : "NO",
        "👆 Max Touch Points": navigator.maxTouchPoints,

        "🍪 Cookies Enabled": navigator.cookieEnabled ? "YES" : "BLOCKED",
        "🕵️ Do Not Track": navigator.doNotTrack === "1" ? "ON" : "OFF",

        "🧬 Fingerprint Strength": "High (enough to recognize you again 😈)",
      });

      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div
      style={{
        background: "black",
        color: "#00ff88",
        minHeight: "100vh",
        fontFamily: "monospace",
        padding: "20px",
      }}
    >
      <h1>🕶️ HACKER VISION ACTIVATED</h1>
      <p style={{ color: "#ff5555" }}>
        ⚠️ Scanning target... No permissions required.
      </p>

      {loading ? (
        <p>🔍 Extracting browser leaks...</p>
      ) : (
        <table border="1" cellPadding="8">
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{String(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <p style={{ marginTop: 20, color: "#888" }}>
        This is NOT hacking. This is what your browser gives away willingly.
      </p>
    </div>
  );
}
