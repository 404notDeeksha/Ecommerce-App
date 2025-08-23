import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { LoaderData } from "./utils/common-components.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate
      loading={
        <>
          <LoaderData isLoading={true} />
        </>
      }
      persistor={persistor}
    ></PersistGate>
    <App />
  </Provider>
);
