import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { ThemeChakra } from "./theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ThemeChakra}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
