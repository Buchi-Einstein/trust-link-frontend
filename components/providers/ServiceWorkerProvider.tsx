"use client";

import { useEffect } from "react";

export function ServiceWorkerProvider() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    function handleLoad() {
      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          console.log("Service Worker registration successful with scope: ", registration.scope);
        },
        function (err) {
          console.log("Service Worker registration failed: ", err);
        }
      );
    }

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return null;
}
