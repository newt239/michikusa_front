import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { UIProvider } from "@yamada-ui/react";

import { routeTree } from "./routeTree.gen";

import theme from "#/theme";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <UIProvider theme={theme}>
        <RouterProvider router={router} />
      </UIProvider>
    </StrictMode>
  );
}
