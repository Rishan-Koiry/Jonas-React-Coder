import { useEffect, useState } from "react";

function useOS() {
  const [os, setOS] = useState("unknown");

  useEffect(() => {
    const ua = navigator.userAgent;

    if (/Windows NT/i.test(ua)) setOS("windows");
    else if (/Macintosh|Mac OS X/i.test(ua)) setOS("mac");
    else if (/Linux/i.test(ua)) setOS("linux");
    else setOS("unknown");
  }, []);

  return os;
}

export default function DownloadButton() {
  const os = useOS();

  const label = {
    windows: "Download for Windows",
    mac: "Download for macOS",
    linux: "Download for Linux",
    unknown: "Download",
  };

  return <button>{label[os]}</button>;
}
