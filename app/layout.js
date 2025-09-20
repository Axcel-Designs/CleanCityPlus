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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/cleanCity.png" />
      </head>
      <body>
        <div className="flex flex-col justify-between min-h-screen w-full">
          <div className="sticky top-0 w-full z-40">
            <Header />
          </div>
          <div className="grow overflow-x-hidden inset-shadow-2xs dark:bg-gray-900">
            {children}
          </div>
          <GoTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
