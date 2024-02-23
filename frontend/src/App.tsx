import { AppThemeProvider } from "theme";
import ErrorBoundary from "components/ErrorBoundary";
import Routes from "routes";
import AppStore from "store";
import { ToastProvider } from "hooks";
import Toast from "components/Toast";
import { Suspense } from "react";
import { Loader } from "components";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary name="App">
        <ToastProvider>
          <AppStore>
            <AppThemeProvider>
              <Toast />
              <Routes />
            </AppThemeProvider>
          </AppStore>
        </ToastProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
