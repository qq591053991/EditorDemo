import React from "react";

export default function Text(props) {
  const { text, fontSize, color } = props;
  return (
    <>
      <span style={{ fontSize, color }}>{text}</span>
    </>
  );
}
