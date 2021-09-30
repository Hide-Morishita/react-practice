import React from "react";
// Linkを使用するための記述
import { Link } from "react-router-dom";
//handコンポーネント読み込み
import Hand from "../../components/hand";
//Enum型handTypeの読み込み
import { HandType } from "../../interfaces/handType";

interface Props {}

// RubyのハッシュやJavaScriptのオブジェクト型のようなキーバリュー形式のデータに関連するTypeScriptの構文です。「バリューの型を指定した、キーバリュー形式のデータ」をひとまとめに型として定義できます。主にクラスやオブジェクトの規格を定義することに使います。
interface State {
  selectHand: HandType;
  enemyHand: HandType;
  resultString: string;
  winCount: number;
  battleCount: number;
}

// ジェネリック<>でStateの型をinterface Stateに設定
// ジェネリックの第一引数がpropsの型、第二引数がstateの型になる
export default class Index extends React.Component<Props, State> {
  // 手の情報の配列を定義
  handTypes: HandType[] = [HandType.Rock, HandType.Scissors, HandType.Paper];
  constructor(props: Props) {
    // constructorは、Rubyでいうinitializeメソッド
    // 初期値の設定時には必ずsuperを記述する
    super(props);
    this.state = {
      // Stateの値の型が決まったので、Enum型HandTypeに値を置き換える
      selectHand: HandType.Rock,
      enemyHand: HandType.Rock,
      // ブラウザに表示される文言の状態
      resultString: "最初はグーじゃんけん",
      // ユーザーの勝ち数
      winCount: 0,
      battleCount: 0,
    };
  }

  // マウント「HTMLを描画する」ときの処理
  componentDidMount() {
    alert("手を選ぶと勝敗が決まるよ！\n手を選んでね");
  }
  // コンポーネントの内容を更新するときの処理
  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.battleCount !== this.state.battleCount) {
      const enemyHand: HandType = Math.floor(Math.random() * 3);
      this.setState({ enemyHand: enemyHand });
      this.confirmResult(this.state.selectHand, enemyHand);
    }
  }
  // コンポーネントの解除
  componentWillUnmount() {
    alert(
      `【戦績】\n${this.state.battleCount}戦中、${this.state.winCount}勝でした。`
    );
  }

  //追記。アロー関数形式でクラスに関数を定義
  handleOnClick = (val: HandType): void => {
    this.setState({ battleCount: this.state.battleCount + 1 });
    this.setState({selectHand: val});
  }

  confirmResult(selectHand: HandType, enemyHand: HandType): void {
    const result: number = (selectHand - enemyHand + 3) % 3;
    if (result === 0) {
      return this.setState({
        resultString: "あいこで",
      });
    } else if (result === 2) {
      return this.setState({
        resultString: "勝ち",
        winCount: this.state.winCount + 1,
      });
    } else {
      return this.setState({
        resultString: "負け",
      });
    }
  }

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
        <h2>自分の手</h2>
        <div style={{ display: "flex" }}>
         {/* // 配列の中身の数だけ処理を繰り返し、配列から取り出したデータをPropsとして渡す */}
         {this.handTypes.map((handType: HandType) => (
          //  index.jsxの呼び出し部分に書くのはあくまでもPropsであり、実際に「要素がクリックされたら◯◯する」といったイベント処理を書くのは子コンポーネントの定義側
            <Hand selectHand={handType} selectedHand={this.state.selectHand} clickHand={this.handleOnClick} />
          ))}
        </div>
        <h1 style={{ color: "red" }}>{this.state.resultString}</h1>
        <h2 style={{ marginTop: 10 }}>相手の手</h2>
        <div style={{ display: "flex" }}>
          {this.handTypes.map((handType: HandType) => (
            <Hand selectHand={handType} selectedHand={this.state.enemyHand} clickHand={this.handleOnClick} />
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