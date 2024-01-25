import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Layout from "./pages/Layout";
import Itemdetailpage from "./pages/Itemdetailpage";
import SubmitItemPage from "./pages/SubmitItemPage";

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
      {
        path: "submit",
        element: <SubmitItemPage />,
      },
    ],
  },
]);

export default router;
