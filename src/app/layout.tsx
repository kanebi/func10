import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Func10",
  description: "Redefined Technological Knowledge Medium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-accent`}
      >
        <div className=" p-4 mb-1 justify-between flex  justify-self-center self-center">
          <div className=" navbar-start overflow-hidden w-10 h-10 rounded-md shadow-md">
            <img src="/images/func10.jpg"></img>
          </div>
          <div className=" navbar-end p-0 flex flex-row gap-2">
            <button className=" ring-0.2 ring-offset-1 ring-secondary bg-secondary  rounded-md p-2 ">Workshops</button>
            <button className="bg-primary p-2 w-32 ring-primary  ring-0.2 ring-offset-1  rounded-md ">Volunteer</button>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
