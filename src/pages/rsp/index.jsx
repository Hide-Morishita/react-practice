import React from "react";

export default class Index extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>じゃんけんページ</h1>
        <h1>じゃんけんを終了する</h1>
      </div>
    );
  }
}