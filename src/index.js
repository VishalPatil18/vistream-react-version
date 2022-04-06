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
  WatchlaterProvider,
  FilterProvider,
} from "./context";
import "./index.css";
import App from "./App";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <FilterProvider>
          <LikesProvider>
            <HistoryProvider>
              <PlaylistsProvider>
                <WatchlaterProvider>
                  <ComponentsProvider>
                    <BrowserRouter>
                      <App />
                    </BrowserRouter>
                  </ComponentsProvider>
                </WatchlaterProvider>
              </PlaylistsProvider>
            </HistoryProvider>
          </LikesProvider>
        </FilterProvider>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
