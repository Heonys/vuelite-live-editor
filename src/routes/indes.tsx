import { createBrowserRouter, Navigate } from "react-router-dom";
import { pageRoutes } from "./path";
import CodeEditor from "@/pages/CodeEditor";

const router = createBrowserRouter([
  {
    path: pageRoutes.root,
    element: <Navigate to={pageRoutes.main} replace />,
  },
  {
    path: "feature",
    children: [
      {
        path: "",
        element: <Navigate to="main" replace />,
      },
      {
        path: ":id",
        element: <CodeEditor />,
      },
    ],
  },
]);

export default router;
