import React from "react";

export default function ErrorMsg(props) {
  return (
    <div className="error">
      <span>{props.msg}</span>
      <div onClick={props.clearMsg} className="deleteErrField">
        X
      </div>
    </div>
  );
}
