import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import GoTop from "@/components/ui/GoTop";

export const metadata = {
  title: "CleanCity+",
  description: "Interactive Waste Management Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cleanCity.png" />
      </head>
      <body>
        <div className="flex flex-col justify-between min-h-screen w-full">
          <Header />
          <div className="grow overflow-x-hidden">{children}</div>
          <GoTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
