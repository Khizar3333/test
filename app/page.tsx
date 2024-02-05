import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Converter from "./components/Converter";
import Footer from "./components/Footer";
// import styles from "./styles/navbar.modules.css";

export default function Home() {
  return (
    <>
   <Navbar/>
   <Converter/>
   <Footer/>
   </>
  );
}
