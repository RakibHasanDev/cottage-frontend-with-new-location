import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./Topbar";
import ScrollButton from "./shared/ScrollButton";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Layout;
