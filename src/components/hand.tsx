import React from "react";
//Enum型handTypeの読み込み
import { HandType } from "../interfaces/handType";

interface Props {
  selectHand: HandType;
  clickHand: (val: HandType) => void;
  selectedHand: HandType;
}

export default class Hand extends React.Component<Props, {}> {
  render() {
    const imgSize = 100;
    const handTypes = ["rock", "scissors", "paper"]
    return (
      <div>
        {/* 親コンポーネントに定義した関数を呼び出す */}
        <button
          onClick={() => {
            this.props.clickHand(this.props.selectHand);
          }}
        >
          <img
            src={`images/${handTypes[this.props.selectHand]}.jpeg`}
            alt="rock"
            style={{
              height: imgSize,
              width: imgSize,
              // props...親コンポーネントが持つ情報を子コンポーネントに渡し、子コンポーネントがそれを活用できるようにするための仕組みです。Stateと同じように、キーバリュー形式のデータです。
              opacity: this.props.selectedHand === this.props.selectHand ? "1.0" : "0.3",
            }}
          />
        </button>
      </div>
    );
  }
}