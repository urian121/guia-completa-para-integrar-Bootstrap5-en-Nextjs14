import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import InstallBoostrap from "./components/InstallBootstrap";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guía Completa para Integrar Bootstrap 5 en Next.js 14",
  description: "Aprender de una vez, como instalar y configurar Bootstrap 5 en Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <InstallBoostrap />
    </html>
  );
}
