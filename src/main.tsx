import React from "react";
import ReactDOM from "react-dom/client";
import {
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import page1 from "./pages/page1";
import page10 from "./pages/page10";
import page2 from "./pages/page2";
import page3 from "./pages/page3";
import page4 from "./pages/page4";
import page5 from "./pages/page5";
import page6 from "./pages/page6";
import page7 from "./pages/page7";
import page8 from "./pages/page8";
import page9 from "./pages/page9";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" Component={App}>
         <Route path="/page1" Component={page1} />
         <Route path="/page2" Component={page2} />
         <Route path="/page3" Component={page3} />
         <Route path="/page4" Component={page4} />
         <Route path="/page5" Component={page5} />
         <Route path="/page6" Component={page6} />
         <Route path="/page7" Component={page7} />
         <Route path="/page8" Component={page8} />
         <Route path="/page9" Component={page9} />
         <Route path="/page10" Component={page10} />
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
