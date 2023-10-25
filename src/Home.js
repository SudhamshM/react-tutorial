const Home = () => {
  let name = "Godspeed";
  console.log("Home component started, name value: ", name);
  const handleClick = function (event) {
    console.log("Entered handleClick function...");
    name = "Zoom";
    console.log("Clicked, name value: ", name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Home;
