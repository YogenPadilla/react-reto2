import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Container from "./Container";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <main
      className={`min-h-screen max-w-[1440px] m-auto border border-[#000000] ${inter.className}`}
    >
      <Container variant="flexColCenter" className="relative w-full ">
      <div className=""
          style={{
            backgroundImage: "url(/assets/bg-hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "1440px",
            height: "760px",
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </Container>
    </main>
  );
};

export default Layout;
