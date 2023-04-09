import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Cover from "./Components/Cover/Cover";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      { path: "/", element: <Cover></Cover> },
      
    ],
  },
  { path: "/", element: <Footer></Footer> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
