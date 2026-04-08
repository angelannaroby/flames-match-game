import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

import App from "./app/App";
import { AppThemeProvider } from "./app/providers/AppThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
      <Analytics />
    </AppThemeProvider>
  </React.StrictMode>,
);