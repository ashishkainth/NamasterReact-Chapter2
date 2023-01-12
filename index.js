import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "I am heading");

const unorderedList = React.createElement("ul", {}, [
  React.createElement("l1", {}, "Home"),
  React.createElement("l1", {}, "About"),
  React.createElement("l1", {}, "Contact"),
]);

const header = React.createElement("div", { id: "header" }, [
  heading,
  unorderedList,
]);

const newHeading = <h1 key="head">new heading elements</h1>;

const HeaderComponent = () => {
  return (
    <div>
      <h1>ashish</h1>
      <h2>kainth</h2>
    </div>
  );
};

const HeaderComponent1 = () => {
  return (
    <div>
      {/* {HeaderComponent} */}
      <HeaderComponent />
      <h1>shgdhj</h1>
      <h2>shjkh</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent1 />);
