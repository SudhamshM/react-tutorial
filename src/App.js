import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to Sudhamsh's blog!";
  const likes = 49;
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <h1>{title}</h1>
        <p>Liked {likes} times.</p>
        <p>{45}</p>
        <p>{[1, 2, 54, 6]}</p>
        <a href={link}>Google</a>
        <h2>App Component</h2> */}
      </div>
    </div>
  );
}

export default App;
