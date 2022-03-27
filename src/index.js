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
      <ComponentsProvider>
        <AuthProvider>
          <DataProvider>
            <LikesProvider>
              <HistoryProvider>
                <PlaylistsProvider>
                  <App />
                </PlaylistsProvider>
              </HistoryProvider>
            </LikesProvider>
          </DataProvider>
        </AuthProvider>
      </ComponentsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
