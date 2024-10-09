import { RoundBoxArt } from "./RoundBox";


import { CenterDesc16, CenterTitle3, CenterWeakDesc14, LeftTitle3 } from "./textStyles";
import { LoginLink } from "./btnStyles";

import { PiDotsThreeCircle } from "react-icons/pi";

import '../css/icons.css';
import { Margin16 } from "./etcStyles";


export function RoutineBox({isAuth}){

  return (
    <RoundBoxArt>
      <CenterTitle3>내 루틴</CenterTitle3>
      <Margin16 />
      {
        isAuth?
        <>
          <p>복등어</p>
        </>:
        <>
          <CenterDesc16>
            <PiDotsThreeCircle className="icon_32" />
          </CenterDesc16>
          <CenterWeakDesc14>로그인이 필요한 서비스입니다.</CenterWeakDesc14>
          <Margin16 />
          <LoginLink text='로그인 하기' />
        </>
      }
    </RoundBoxArt>
  )
};