import React from "react";
// Linkを使用するための記述
import { Link } from "react-router-dom";

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
        <Link to="/">
          <h1>じゃんけんを終了する</h1>
        </Link>
      </div>
    );
  }
}