import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrder } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      {
        path: "/react-pizza-app",
        element: <Home />,
      },
      {
        path: "/react-pizza-app/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/react-pizza-app/cart",
        element: <Cart />,
      },
      {
        path: "/react-pizza-app/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/react-pizza-app/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrder,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
