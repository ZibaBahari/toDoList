import React from "react";
import "./style.css";
import { Button } from "@material-ui/core";

function Buttons(props) {
  const onClick = (e) => {
    props.onClick && props.onClick(e);
  };
  return (
    <div className="button">
      <Button variant="contained" onClick={onClick}>
        Create
      </Button>
    </div>
  );
}
export default Buttons;
