import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </body>
      </html>
    </StoreProvider>
  );
}
