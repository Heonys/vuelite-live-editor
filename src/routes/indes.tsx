import { createBrowserRouter, Navigate } from "react-router-dom";
import { pageRoutes } from "./path";
import CodeEditor from "@/pages/CodeEditorPage";
import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: pageRoutes.root,
    element: <Navigate to={pageRoutes.main} replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "feature",
    element: <App />,
    errorElement: <ErrorPage />,
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
