import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.ts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);