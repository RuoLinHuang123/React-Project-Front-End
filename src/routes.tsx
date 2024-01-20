import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Layout from "./pages/Layout";
import Itemdetailpage from "./pages/Itemdetailpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "item/:name",
        element: <Itemdetailpage />,
      },
    ],
  },
]);

export default router;
