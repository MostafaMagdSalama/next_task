import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Navbar />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      {/* <Component {...pageProps} /> */}
    </>
  );
}

export default MyApp;
