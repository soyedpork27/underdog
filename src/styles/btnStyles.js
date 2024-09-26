import styled from "styled-components";

import { Link } from "react-router-dom";

import { colors } from "./textStyles";


export const MainBlockBtn = styled.button`
  border : none;
  background : none;

  display : block;

  width : 200px;
  border-radius : 10px;

  margin : 16px auto 0 auto;

  font-size : 18px;
  font-weight : bold;
  line-height : 42px;
  overflow : hidden;

  background-color : ${colors.mainColor};

  color : #000;

  > a {
    font-size : 18px;
    fong-weight : bold;
    line-height : 42px;
    display : block;
    color : #000;
  }
`;



export function LoginLink({text}){

  return(
    <MainBlockBtn>
      <Link to='/mypage/login'>{text}</Link>
    </MainBlockBtn>
  )
};