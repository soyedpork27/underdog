import styled from "styled-components";


const Span16 = styled.span`
  display : block;
  line-height : 16px;
`;

const Span8 = styled.span`
  display : block;
  line-height : 8px;
`;

export function Margin16({props}){
  return (
    <Span16>&nbsp;</Span16>
  )
};

export function Margin8({props}){
  return (
    <Span8>&nbsp;</Span8>
  )
}

