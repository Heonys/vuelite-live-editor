import { createBrowserRouter, Navigate } from "react-router-dom";
import { pageRoutes } from "./path";
import CodeEditor from "@/pages/CodeEditor";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: pageRoutes.root,
    element: <Navigate to={pageRoutes.main} replace />,
  },
  {
    path: "feature",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to="v-bind" replace />,
      },
      {
        path: ":id",
        element: <CodeEditor />,
      },
    ],
  },
]);

export default router;
