import { ThemeProvider, ascDefaultTheme } from "@amsterdam/asc-ui";
import { RenderOptions, render } from "@testing-library/react";
import { ReactElement, ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState<QueryClient>(() => new QueryClient());
  return (
    <ThemeProvider theme={ascDefaultTheme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
