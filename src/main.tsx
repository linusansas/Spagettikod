import React from "react";
import ReactDOM from "react-dom/client";
import {
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import ShoppingList from "./shoppinglist";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" Component={App}>
         <Route path="/shoppinglist" Component={ShoppingList} />
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
