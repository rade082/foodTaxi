import React from "react";
import bg from '../assets/bg.jpg';
import FrequentItem from "../menu/FrequentItem";
function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark border-0">
        <img src={bg} className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">Delicious Food On The Go! </h5>
          <p className="card-text lead fw-bolder">
            Wide varity of mouth watering dishes. Order Now!
          </p>
            </div>
        </div>
      </div>
      <div>
      <FrequentItem/>
      </div>
    </div>
  );
}

export default Home;
