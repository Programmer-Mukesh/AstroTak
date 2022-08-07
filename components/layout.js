import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="hero-container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
