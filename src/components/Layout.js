import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./Topbar";
import ScrollButton from "./shared/ScrollButton";
import PopUp from "./shared/PopUp";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen  dark:bg-slate-600">
      <TopBar />
      <Navbar />
      <div className="overflow-hidden">
        <PopUp />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollButton />
      </div>
    </div>
  );
};

export default Layout;
