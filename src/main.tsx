import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import theme from "./theme.ts";
import router from "./routes/indes.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </ChakraProvider>,
);
