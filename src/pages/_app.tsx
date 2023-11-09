import { persistor, store } from "@/store/store";
import "@/styles/app.scss";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}
