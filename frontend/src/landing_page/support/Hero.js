import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 mx-5" id="supportWrapper">
        <h4> Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mx-6">
        <div className="col-7 p-5 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
          <br />
          <a href="" className="mx-3">
            Track account opening
          </a>
          <a href="" className="mx-3">
            Track segment activation
          </a>
          <a href="" className="mx-3">
            Intraday margins
          </a>
          <a href="" className="mx-3">
            Kite user manual
          </a>
        </div>
        <div className="col-5 p-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{ lineHeight: "2.5" }}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="" style={{ lineHeight: "2.5" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
