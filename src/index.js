import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import {
  AuthProvider,
  ComponentsProvider,
  LikesProvider,
  DataProvider,
  HistoryProvider,
  PlaylistsProvider,
} from "./context";
import "./index.css";
import App from "./App";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <ComponentsProvider>
            <LikesProvider>
              <HistoryProvider>
                <PlaylistsProvider>
                  <App />
                </PlaylistsProvider>
              </HistoryProvider>
            </LikesProvider>
          </ComponentsProvider>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
