import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from "@/components/errorBoundary/errorBoundary";
import { AuthProvider } from "@/hooks/useAuth";
import Layouts from "@/layouts";
import history from "@/utils/history";
import RootRoutes from "@/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      /**Todo: option mutations */
    },
  },
});

function App() {
  return (
    <BrowserRouter history={history}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ErrorBoundary>
            <Layouts>
              <RootRoutes />
            </Layouts>
          </ErrorBoundary>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
