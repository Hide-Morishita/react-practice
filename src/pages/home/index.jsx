import { findByLabelText } from "@testing-library/dom";
import React from "react";

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
      </div>
    );
  }
}