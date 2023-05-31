import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_PUBLIC_GOOGLE_API_TOKEN}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
