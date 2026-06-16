// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RouteLoader from "./RouteLoader";


export const metadata = {
  title: "TVK Government Tracking",
  description: "TVK Governance Tracker is a comprehensive public administration monitoring platform providing transparent access to government schemes, ministers, manifesto commitments, policy updates, development initiatives, and official announcements across Tamil Nadu.",
  icons:{
    icon:[
      { url: "/Favicon.png", sizes: "any",href: "/Favicon.png" },
    ]
  }
};

export default function RootLayout({ children }) {
  return (
      <html
        lang="en"
        className={'h-full antialiased'}
      >
        <body className="min-h-full flex flex-col">{
          <RouteLoader>
            {children}
          </RouteLoader>
        }</body>
      </html>
  );
}
