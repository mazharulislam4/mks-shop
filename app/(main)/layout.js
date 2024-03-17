import Provider from "@/Provider";
import Footer from "@/components/footer/footer";
import MainNavbar from "@/components/navbar/mainNavbar";
import { inter, open_sans } from "@/fonts";
import "@/globals.css";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const metadata = {
  title: "MKS SHOP",
  description: "World best e-commerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${open_sans.variable}`}>
      <body>
        <NextTopLoader  showSpinner = {false} />
        <Provider>
          <header>
            <MainNavbar />
          </header>

          {children}

          <footer className="bg-black ">
            <Footer />
          </footer>

          {/* toast  */}
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
