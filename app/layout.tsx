import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CustomThemeProvider } from "./theme-context";
import { CssBaseline } from "@mui/material";

import GoogleAnalytics from "./GoogleAnalytics";


export const metadata: Metadata = {
  title: "Ubaldo's portfolio",
  description: "This is Ubaldo's portfolio created with NextJs, MUI and typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <GoogleAnalytics/>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CustomThemeProvider>
            <CssBaseline />
            {children}
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
