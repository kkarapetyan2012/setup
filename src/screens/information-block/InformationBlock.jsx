import React from "react";
import "./InformationBlock.scss";
import LeftBlock from "./components/left-block/LeftBlock";
import RightBlock from "./components/rigth-block/RightBlock";

const InformationBlock = () => (
  <div className="informationBlock d-flex justify-content_center">
    <div className="informationContainer">

      <div className="blockContainer">
        <LeftBlock />
        <RightBlock />
      </div>
    </div>

  </div>
);

export default InformationBlock;
