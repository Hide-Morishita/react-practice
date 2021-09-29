import React from "react";
// react-routerを使用するために必要なライブラリをインポート
import { BrowserRouter, Route } from "react-router-dom";
// 各コンポーネントをインポートする
import Home from "./pages/home";
import Rsp from "./pages/rsp";

// ReactRouterは<Route path="PATH名" component={コンポーネント名} />とすることで、ルーティングを設定することができる。
// exactを指定すると、path=""の中身の文字列とパスが完全一致した場合のみ、該当するコンポーネントを画面に描画する。
export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/rsp" component={Rsp} />
      </BrowserRouter>
    );
  }
}