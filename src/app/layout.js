
import "./globals.css";
import ClientOnlyWrapper from "./components/clientOnlyWarpper";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "G8DAY",
  description: "G8DAY_WepApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black flex min-h-dvh justify-center m-0 p-0 ${inter.className}`} >
        <div className=" w-full h-screen max-w-[500px] max-h-[1080px] bg-multi-gradient relative flex flex-col justify-between overflow-hidden"
          >
            <div className=" absolute top-[50%] left-[50%] opacity-50 -translate-x-[50%] -translate-y-[50%] w-[60%] h-[90%] bg-center-gradient rounded-ellipse -rotate-[30deg]
            shadow-[0_0_30px_5px_rgba(255,78,81,0.3)] "></div>
            {children}
          <Analytics />
          <SpeedInsights />
          <ClientOnlyWrapper />
        </div>
      </body>
    </html>
  );
}
