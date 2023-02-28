import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import ErrorBoundary from "@/components/errorBoundary";
import { AuthProvider } from "@/hooks/useAuth";
import Layouts from "@/layouts";
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
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ErrorBoundary>
          <Layouts>
            <RootRoutes />
          </Layouts>
        </ErrorBoundary>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
