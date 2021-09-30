import React from "react";
// Linkを使用するための記述
import { Link } from "react-router-dom";
//handコンポーネント読み込み
import Hand from "../../components/hand";

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

  //追記。アロー関数形式でクラスに関数を定義
  handleOnClick = (val) => {
    this.setState({selectHand: val});
  }

  render() {
    // 手の情報の配列を定義
    const handTypes = [0,1,2]
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
         {/* // 配列の中身の数だけ処理を繰り返し、配列から取り出したデータをPropsとして渡す */}
         {handTypes.map((handType) => (
          //  index.jsxの呼び出し部分に書くのはあくまでもPropsであり、実際に「要素がクリックされたら◯◯する」といったイベント処理を書くのは子コンポーネントの定義側
            <Hand selectHand={handType} selectedHand={this.state.selectHand} clickHand={this.handleOnClick} />
          ))}
        </div>
        <Link to="/">
          <h1>じゃんけんを終了する</h1>
          <h4>※戦績が発表されます。</h4>
        </Link>
      </div>
    );
  }
}