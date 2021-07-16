import { findByLabelText } from "@testing-library/dom";
import React from "react";
// Linkを使用するための記述
import { Link } from "react-router-dom";

// クラスコンポーネント
// 他のファイルで呼びだすために、"export default"を記述している
export default class Index extends React.Component {  
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>ジャンケンに挑戦しよう！</h1>
        <Link to="/rsp">
          <h1>じゃんけんページへ</h1>
        </Link>
      </div>
    );
  }
}