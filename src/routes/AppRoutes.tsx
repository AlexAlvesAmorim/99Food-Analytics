import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { Dashboard } from "../pages/Dashboard/Dashboard";

import { Orders } from "../pages/Orders/Orders";

import { Products } from "../pages/Products/Products";

import { Settings } from "../pages/Settings";

export const router = createBrowserRouter ([ {
    path: "/",
    element: <MainLayout />,
    children: [ 
        {
            index: true,
            element: <Dashboard />
        },
       {
            path: "orders",
            element: <Orders />
        },
         {
            path: "products",
            element: <Products />
        }, 
          {
            path: "settings",
            element: <Settings />
        }
    ]
}
]);