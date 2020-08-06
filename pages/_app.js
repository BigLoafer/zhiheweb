import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/globals.css";
import "../node_modules/antd-mobile/dist/antd-mobile.min.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    document.addEventListener(
      "DOMContentLoaded",
      function() {
        FastClick.attach(document.body);
      },
      false
    );
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <script src="/js/flexible.min.js"></script>
        <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
