import React from "react";

export default function Text(props) {
  const { text, fontSize, color } = props.config;
  return (
    <>
      <span style={{ fontSize, color }}>{text}</span>
    </>
  );
}
