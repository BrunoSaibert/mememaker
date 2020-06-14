import React from "react";

import logo from "../../images/logo.svg";

import * as S from "./styles";

function Home() {
  return (
    <S.Container>
      <img src={logo} alt="MemeMaker" />

      <S.Card>
        <h2>Selecione um template</h2>

        <S.Templates>
          <button type="buttom">
            <img src="" alt="Temp 1" />
          </button>
          <button type="buttom">
            <img src="" alt="Temp 1" />
          </button>
          <button type="buttom">
            <img src="" alt="Temp 1" />
          </button>
        </S.Templates>

        <h2>Textos</h2>
        <S.Form>
          <input placeholder="Texto #1" />
          <input placeholder="Texto #1" />
          <input placeholder="Texto #1" />

          <S.Button type="submit">MekeMyMeme!</S.Button>
        </S.Form>
      </S.Card>
    </S.Container>
  );
}

export default Home;
