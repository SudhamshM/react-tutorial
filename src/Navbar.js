import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Sudhamsh's Dojo Club</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className="createBtn">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
