import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
