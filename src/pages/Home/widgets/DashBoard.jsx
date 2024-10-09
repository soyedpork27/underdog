import React from 'react';
import { BigText28, CenterTitle3, CenterTitle4 } from '../../../styles/textStyles';
import { RoundBoxSect, RoundTwoLayerBoxArt, RoundTwoLayerWrap } from '../../../styles/RoundBox';
import { Margin16 } from '../../../styles/etcStyles';

function DashBoard(props) {
  return (
    <RoundBoxSect className='no_margin'>
      <CenterTitle3>대시보드</CenterTitle3>

      <RoundTwoLayerWrap>
        <RoundTwoLayerBoxArt>
          {/* 마지막 운동 언제인지 */}
          <CenterTitle4>마지막 운동</CenterTitle4>
          <Margin16/>
          <BigText28>오늘</BigText28>

        </RoundTwoLayerBoxArt>

        <RoundTwoLayerBoxArt>
          {/*  */}

        </RoundTwoLayerBoxArt>

      </RoundTwoLayerWrap>
      
    </RoundBoxSect>
  );
}

export default DashBoard;