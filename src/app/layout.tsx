import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog",
  description: "Blog com Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          Header
        </header>

        <div className="bg-red-500">
          {children}
        </div>

        <footer>
          Footer
        </footer>
      </body>
    </html>
  );
}
