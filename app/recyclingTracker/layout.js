import TrackerProvider from "../context/TrackerContext";

export default function RootLayout({ children }) {
  return <TrackerProvider>{children}</TrackerProvider>;
}
