import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container/Container";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: {
    default: 'The Blog - Next.js',
    template: '%s | The Blog'
  },
  description: "Blog com Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />
        
          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
