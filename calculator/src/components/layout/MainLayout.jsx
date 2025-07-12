import Header from "../ui/navigation/Header";
import Footer from "../ui/navigation/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
