import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AuthProvider from "@/shared/components/AuthProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Netflix - Krishal",
  description: "Full Stack Netflix Clone",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
