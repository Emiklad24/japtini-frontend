import "@styles/globals.css";
import PropTypes from "prop-types";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import "@styles/globals.css";
import { Hydrate } from "react-query/hydration";
import { useQueryClientAndsettings } from "@utils/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "next/router";
import LoadingScreen from "@components/LoadingScreen/LoadingScreen";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  Router.onRouteChangeStart = () => {
    setIsLoading(true);
  };

  Router.onRouteChangeComplete = () => {
    setIsLoading(false);
  };

  Router.onRouteChangeError = () => {
    setIsLoading(false);
  };
  const { queryClient } = useQueryClientAndsettings();

  return (
    <>
      {isLoading && <LoadingScreen />}
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
