import { useState } from "react";

const Home = () => {
  // let name = "Godspeed";
  const [name, setName] = useState("August Heart");
  const [age, setAge] = useState(34);
  console.log("Home component started, name value: ", name);

  const handleClick = function (event) {
    console.log("Entered handleClick function...");

    setName("Hunter Zolomon");
    setAge(38);

    console.log("Clicked, name value: ", name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Home;
