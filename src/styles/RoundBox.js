import styled from 'styled-components';
import { LeftTitle4 } from './textStyles';


export const RoundBoxArt = styled.article`
  position : relative;
  border-radius : 10px;
  width : 100%;
  padding : 8px;
  background-color : #1E2024;
  margin-top : 16px;
`;

export const RoundBoxSect = styled.section`
  position : relative;
  border-radius : 10px;
  width : 100%;
  padding : 12px 8px;
  background-color : #1E2024;
  margin-top : 16px;
`;

export const RoundTwoLayerWrap = styled.div`
  display : flex;
  width : 100%;
  justify-content : space-between;
`;

export const RoundTwoLayerBoxArt = styled.article`
  position : relative;
  border-radius : 10px;
  width : calc(50% - 4px);
  padding : 8px;
  background-color : #000;
  margin-top : 8px;
`;






export function RoundBoxBig({title, desc}){

  return (
    <RoundBoxArt>
      <LeftTitle4>{title}</LeftTitle4>
      <p>{desc}</p>
    </RoundBoxArt>
  )
};