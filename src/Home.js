const handleClick = function () {
  console.log("You clicked it!");
};

const handleAnonymousClick = function (name) {
  console.log(`Hello to you, ${name}!`);
};

const Home = () => {
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me!</button>
      <button
        onClick={function () {
          handleAnonymousClick("Zoom");
        }}
      >
        Anonymous click!
      </button>
    </div>
  );
};

export default Home;
