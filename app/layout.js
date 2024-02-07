import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Whispery",
  description: "Whispery me: Gabriel Coutinho",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-stone-50 text-neutral-900 ${inter.className}`}>
          <NavBar />
          {children}
      </body>
    </html>
  );
}
