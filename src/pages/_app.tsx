import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout;
  if (getLayout) {
    return getLayout(<Component {...pageProps} />);
  } else {
    return (
      <div>
        <div>this is header</div>
        <Component {...pageProps} />
        <div>this is footer</div>
      </div>
    );
  }
}
