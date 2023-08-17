import { Metadata } from "next";

import { Providers } from "./providers";
import { MoonIcon } from "@chakra-ui/icons";

export const metadata: Metadata = {
  title: "Port App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
