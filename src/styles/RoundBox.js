import styled from 'styled-components';
import { LeftTitle4 } from './textStyles';


export const RoundBoxBg = styled.article`
  position : relative;
  border-radius : 10px;
  width : 100%;
  padding : 8px;
  background-color : #1E2024;
  margin-top : 8px;
`;






export function RoundBoxBig({title, desc}){

  return (
    <RoundBoxBg>
      <LeftTitle4>{title}</LeftTitle4>
      <p>{desc}</p>
    </RoundBoxBg>
  )
};