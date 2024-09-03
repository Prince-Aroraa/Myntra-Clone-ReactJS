import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ScreenLoader() {
  return (
    <center className="Loader">
      <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
      </button>
    </center>
  );
}

export default ScreenLoader;
