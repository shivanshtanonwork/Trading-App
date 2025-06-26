import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "150px" }}
            alt=""
          />
          <p className="text-small text-muted">Algo & strategy platform </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "200px" }}
            alt=""
          />
          <p className="text-small text-muted mt-3">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "150px" }}
            alt=""
          />
          <p className="text-small text-muted mt-2">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ width: "150px" }}
            alt=""
          />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "140px" }}
            alt=""
          />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="btn btn-primary p-2 fs-5 mb-5 mt-4"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
