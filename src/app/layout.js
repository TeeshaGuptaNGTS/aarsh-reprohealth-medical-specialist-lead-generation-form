import "./globals.css";
import { ToastContainer } from "react-toastify";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
         <ToastContainer position="top-right" autoClose={4000} />
        {children}
      </body>
    </html>
  );
}
