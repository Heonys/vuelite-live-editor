import { createBrowserRouter, Navigate } from "react-router-dom";

import { pageRoutes } from "./path";
import App from "@/App";
import CodeEditor from "@/pages/CodeEditorPage";
import ErrorPage from "@/pages/ErrorPage";
import SignUpPage from "@/pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: pageRoutes.root,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to={pageRoutes.main} replace />,
      },
      {
        path: "feature",
        children: [
          { index: true, element: <Navigate to="v-bind" replace /> },
          { path: ":id", element: <CodeEditor /> },
        ],
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
