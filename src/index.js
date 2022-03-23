import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider, ComponentsProvider, LikesProvider } from "./context";
import "./index.css";
import App from "./App";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ComponentsProvider>
          <LikesProvider>
            <App />
          </LikesProvider>
        </ComponentsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
