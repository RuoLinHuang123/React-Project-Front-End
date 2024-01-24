import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Layout from "./pages/Layout";
import Itemdetailpage from "./pages/Itemdetailpage";
import SubmitItem from "./components/SubmitItem";
import SubmitDetailPage from "./pages/SubmitDetailPage";

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
        element: <SubmitItem />,
      },
      {
        path: "submitDetail",
        element: <SubmitDetailPage />,
      },
    ],
  },
]);

export default router;
