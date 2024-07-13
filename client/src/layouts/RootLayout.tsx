import { FC, ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container px-5 mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
