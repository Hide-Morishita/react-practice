import React, { useState, useEffect } from "react";
// Linkを使用するための記述
import { Link } from "react-router-dom";
//handコンポーネント読み込み
import Hand from "../../components/hand";
//Enum型handTypeの読み込み
import { HandType } from "../../interfaces/handType";

// 関数コンポーネントに置き換え
export default function Index(){
  const handTypes: HandType[] = [HandType.Rock, HandType.Scissors, HandType.Paper];

  const battleCountVal = React.useRef(0);
  const winCountVal = React.useRef(0);

  const [selectHand, setSelectHand] = useState<HandType>(HandType.Rock);
  const [enemyHand, setEnemyHand] = useState<HandType>(HandType.Rock);
  const [resultString, setResultString] = useState<string>(
    "最初はグー、じゃんけん"
  );
  const [winCount, setWinCount] = useState<number>(0);
  const [battleCount, setBattleCount] = useState<number>(0);

  // マウント「HTMLを描画する」ときの処理
  useEffect(() => {
    alert("手を選ぶと、勝敗が決まるよ！\n手を選んでね！");
    return () => {
      alert(`【戦績】\n${battleCountVal.current}戦中、${winCountVal.current}勝でした。`);
    };
  }, []);
  // コンポーネントの内容を更新するときの処理
  useEffect(() => {
    if (selectHand !== undefined) {
      const enemyHand: HandType = Math.floor(Math.random() * 3);
      setEnemyHand(enemyHand);
      confirmResult(selectHand, enemyHand);
      battleCountVal.current = battleCount;
      winCountVal.current = winCount;
    }
  }, [battleCount]);

  //追記。アロー関数形式でクラスに関数を定義
  const handleOnClick = (val: HandType): void => {
    setBattleCount(battleCount + 1);
    setSelectHand(val);
  };

  const confirmResult = (selectHand: HandType, enemyHand: HandType): void => {
    const result: number = (selectHand - enemyHand + 3) % 3;
    if (result === 0) {
      setResultString("あいこで");
    } else if (result === 2) {
      setResultString("勝ち");
      setWinCount(winCount + 1);
    } else {
      setResultString("負け");
    };
  }

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
        {handTypes.map((handType: HandType) => (
        //  index.jsxの呼び出し部分に書くのはあくまでもPropsであり、実際に「要素がクリックされたら◯◯する」といったイベント処理を書くのは子コンポーネントの定義側
          <Hand selectHand={handType} selectedHand={selectHand} clickHand={handleOnClick} />
        ))}
      </div>
      <h1 style={{ color: "red" }}>{resultString}</h1>
      <h2 style={{ marginTop: 10 }}>相手の手</h2>
      <div style={{ display: "flex" }}>
        {handTypes.map((handType: HandType) => (
          <Hand selectHand={handType} selectedHand={enemyHand} clickHand={handleOnClick} />
        ))}
      </div>
      <Link to="/">
        <h1>じゃんけんを終了する</h1>
        <h4>※戦績が発表されます。</h4>
      </Link>
    </div>
  );
}
