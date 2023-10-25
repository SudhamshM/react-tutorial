const handleClick = function (event) {
  console.log("Entered handleClick function...");
  console.log("Printing event info: ", event);
  console.log("You clicked it!");
};

/**
 * The function to handle a click triggered anonymously
 * @param {Event} event
 * @param {string} name
 */
const handleAnonymousClick = function (event, name) {
  console.log("Entered handleAnonymousClick function...");
  console.log("Printing event target: ", event.target);
  console.log(`Hello to you, ${name}!`);
};

const Home = () => {
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me!</button>
      <button
        onClick={function (event) {
          handleAnonymousClick(event, "Zoom");
        }}
      >
        Anonymous click!
      </button>
    </div>
  );
};

export default Home;
