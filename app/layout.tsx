import type { Metadata } from "next";
import { Inter, Montserrat, Roboto, Open_Sans , Poppins, Roboto_Mono, Roboto_Slab} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ToastProvider from "@/components/toast-provider";

const inter =Montserrat({ subsets: ["latin"],
  weight:  [ "300", "400" ,"500","600","700","900"]
 });

export const metadata: Metadata = {
  title: "zitranet",
  description: "Create your AI chat bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
          {children}
          <ToastProvider/>
        <Footer/>
        </body>
    </html>
  );
}
