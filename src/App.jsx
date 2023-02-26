import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import RootRoutes from "@/routes";
import ErrorBoundary from "@/components/errorBoundary/errorBoundary";
import { AuthProvider } from "@/hooks/useAuth";

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
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ErrorBoundary>
          <RootRoutes />
        </ErrorBoundary>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
