import React from "react";
// Linkを使用するための記述
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  constructor() {
    // constructorは、Rubyでいうinitializeメソッド
    // 初期値の設定時には必ずsuperを記述する
    super();
    this.state = {
      // state値は、RubyでいうHash、キーとバリューで記述する
      selectHand: 0,
    };
  }
  render() {
    // cssで、画像サイズのプロパティの値に利用
    const imgSize = 100;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>じゃんけんページ</h1>
        <div style={{ display: "flex" }}>
          <button
            onClick={ () => {
              console.log("グーがクリックされました");
            }}
          >
            <img
              src={`images/rock.jpeg`}
              alt="rock"
              style={{
                height: imgSize,
                width: imgSize,
              }}
            />
          </button>
          <button
            onClick={ () => {
              console.log("パーがクリックされました");
            }}
          >
            <img
              src={`images/paper.jpeg`}
              alt="paper"
              style={{
                height: imgSize,
                width: imgSize,
              }}
            />
          </button>
          <button
            onClick={ () => {
              console.log("チョキがクリックされました");
            }}
          >
            <img
              src={`images/scissors.jpeg`}
              alt="scissors"
              style={{
                height: imgSize,
                width: imgSize,
              }}
            />
          </button>
        </div>
        <Link to="/">
          <h1>じゃんけんを終了する</h1>
          <h4>※戦績が発表されます。</h4>
        </Link>
      </div>
    );
  }
}