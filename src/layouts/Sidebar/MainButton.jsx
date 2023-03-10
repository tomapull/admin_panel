import React from "react";

export default function MainButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={"main-button py-4 " + (props.active ? " active" : "")}
    >
      {props.name}
    </button>
  );
}
