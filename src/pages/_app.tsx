import type { AppProps } from "next/app";
import { GlobalStyle, ThemeProvider, ascDefaultTheme } from "@amsterdam/asc-ui";
import "../../public/fonts/fonts.css";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState<QueryClient>(() => new QueryClient());

  return (
    <ThemeProvider theme={ascDefaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
