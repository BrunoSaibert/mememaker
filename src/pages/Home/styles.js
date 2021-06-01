import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  margin: 50px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  background: #fcfcfc;
  max-width: 550px;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  margin-top: 15px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 22px;
    color: #392d2d;
    margin-bottom: 10px;
  }

  > a img {
    width: 100%;
    transition: opacity 0.2s ease-in;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Templates = styled.div`
  width: 100%;
  background: #eee;
  border-radius: 8px;
  overflow-y: auto;
  padding: 15px 15px 5px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;

  button {
    border: 2px solid transparent;
    background: transparent;

    & + button {
      margin: 0 2px;
    }

    &.selected {
      border-color: #4395d8;
    }

    img {
      height: 100px;
    }
  }
`;

export const Form = styled.form`
  margin-bottom: 15px;

  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
    padding: 0 15px;
    font-size: 14px;

    & + input {
      margin-top: 10px;
    }
  }
`;

export const Button = styled.button`
  margin-bottom: 30px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #4395d8;
  color: #fff;
  font-weight: bold;
  border: 1px solid #dbdbdb;
  padding: 0 15px;
  font-size: 14px;
`;
