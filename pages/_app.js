import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo as SEO } from "next-seo";
import { SEO as SEOConfig } from "../next-seo.config";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <SEO {...SEOConfig} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
