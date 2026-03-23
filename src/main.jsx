import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "@redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { LoaderData } from "@components/common/loaderData.jsx";
import AppErrorBoundary from "@components/feedback/errorBoundary.jsx";
import { ErrorToast, GlobalErrorStyles } from "@components/feedback/errorToast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate
      loading={
        <>
          <LoaderData isLoading={true} />
        </>
      }
      persistor={persistor}
    >
      <AppErrorBoundary>
        <GlobalErrorStyles />
        <ErrorToast />
        <App />
      </AppErrorBoundary>
    </PersistGate>
  </Provider>
);
