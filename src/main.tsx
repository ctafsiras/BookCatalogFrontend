import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Nav />
    <RouterProvider router={router}/>
    <Footer />
    {/* </Provider> */}
  </React.StrictMode>
);
