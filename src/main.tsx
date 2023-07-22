/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
// import Nav from "./layout/Nav.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Nav /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </Provider>
  </React.StrictMode>
);
