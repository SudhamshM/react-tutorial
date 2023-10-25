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
      </div>
    </div>
  );
}

export default App;
