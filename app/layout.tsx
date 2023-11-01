import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import GlobalStyles from "../styles/GlobalStyles";

export const metadata: Metadata = {
  title: "TO TRAVEL IS TO LIVE",
  description: "new project, to travel is to live!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
