import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Logo</Link>
      <nav>
        <Link to="/pricing">Pricing</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
