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
          <div className="grow overflow-x-hidden inset-shadow-2xs">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
