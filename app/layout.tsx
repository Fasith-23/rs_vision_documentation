"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./features/nav-bar";
import { HeadingsProvider } from "./context/heading-context";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <html lang="en">
      {pathname !=='/' && 
        <body className={`${inter.className} pt-16`}>
        <HeadingsProvider>

         <NavBar />
         <main className="">{children}</main>
        </HeadingsProvider>
      </body>
      }
      {pathname =='/' && 
        <body className={inter.className} >
        <HeadingsProvider>
         
          <main className="">{children}</main>
        </HeadingsProvider>
      </body>
      }
      
    </html>
  );
};

export default RootLayout;
