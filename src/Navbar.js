const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Sudhamsh's Dojo Club</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" className="createBtn">
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
