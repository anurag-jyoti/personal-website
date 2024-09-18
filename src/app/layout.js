import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";


export const metadata = {
  title: "Anurag Jyoti's website",
  description: "A personal website of Anurag Jyoti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
