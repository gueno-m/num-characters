import styled from 'styled-components';

const StyleMessage = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 flex-direction: row;

 div {
  display: flex;
  flex-direction: column;
  width: 50%;
 }

  div h2 {
    margin: auto;
    margin-bottom: 0;
  }

  div form {
    width: 50%;
    margin:auto;
    margin-top: 10px;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;

    input[type="text"] {
      margin: auto;
      margin-top: 20px;
      width: 90%;
      height: 45px;
      font-size: 1.5rem;
      padding-left: 10px;
    }

    label {
      margin: auto;
      margin-top: 20px;
      width: 100%;
    }

    select {
      margin: auto;
      width: 100%;
      height: 45px;
      font-size: 1.5rem;
    }

    input[type="submit"]{
      margin:auto;
      margin-top: 50px;
      cursor:pointer;
      width: 50%;
      padding: 10px;
      font-size: 1.5rem;
      border-radius: 5px;
      border: solid 2px black;
      background: transparent;
      transition: all .2s ease;

      &:hover {
        background: black;
        color: white;
      }

     }
  }

  div h3 {
    margin: auto;
    width: 50%;
    margin-top: 50px;
    font-size: 1.5rem;

    span {
      font-weight: 400;
    }
  }

  div div {
    margin: auto;
    font-size: 1.5rem;

    p {
      span {
        font-weight: 700;
      }
    }
  }
 }
`;

export default StyleMessage;