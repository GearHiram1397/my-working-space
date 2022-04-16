import React from "react";
import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      
      <div class="progress">
        <div class="progress_value"></div>
      </div>
    </div>
  );
};

export default Preloader;
