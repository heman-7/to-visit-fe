import { Jumbotron } from "reactstrap";
import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <div>
      <Jumbotron className="text-center bg-color">
        <h1 className="display-5" style={{ padding: 5 }}>
          Plans for 2022!
        </h1>
        <p className="lead" style={{ padding: 5 }}>
          Abroad Trip Coming soon...
        </p>
      </Jumbotron>
    </div>
  );
};
export default Home;
