if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => { 
    navigator.serviceWorker
      .register("/service-worker.js") 
      .then((registration) => {
        console.log("Service worker registered:", registration.scope);
      })
      .catch((error) => {
        console.log("Registration failed:", error);
      });
  });
}
