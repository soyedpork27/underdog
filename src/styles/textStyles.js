import styled from "styled-components";

// 컴포넌트 네이밍 규칙 : 정렬위치 + 요소 + 크기

// 요소 정의
// h태그 : Title
// p태그 : Desc

// 크기 정의
// h태그 : h태그의 종류
// p태그 : font-size

// 텍스트 컬러들
export const colors = {
  mainColor : `#4EC9B0`,
  subColor : `#ff7512`,
  weakColor : `#ccc`,
  infoColor : `#ff0`,
  warnColor : `#f00`,
}

// 페이지별 제목 왼쪽 텍스트
export const LeftPageTitle = styled.h2`
  font-size : 22px;
  margin-bottom : 16px;
`;

// 페이지별 제목 중앙 텍스트
export const CenterPageTitle = styled.h2`
  font-size : 22px;
  text-align : center;
  margin-bottom : 16px;
`;

// 가운데 정렬 h3 태그
export const CenterTitle3 = styled.h3`
  text-align : center;
  font-size : 18px;
  margin-bottom : 12px;
`;

// 왼쪽 정렬 h3 태그
export const LeftTitle3 = styled.h3`
  font-size : 18px;
  margin-bottom : 12px;
`;

// 가운데 정렬 h4 태그
export const CenterTitle4 = styled.h4`
  text-align : center;
  font-size : 16px;
  margin-bottom : 12px;
`;

// 왼쪽 정렬 h4 태그
export const LeftTitle4 = styled.h4`
  font-size : 16px;
  margin-bottom : 12px;
`;


//  --- 서술 ---

// 가운데 정렬 서술 텍스트
export const CenterDesc16 = styled.p`
  font-size : 16px;
  text-align : center;
  margin-bottom : 8px;
`;

// 왼쪽 정렬 서술 텍스트
export const LeftDesc16 = styled.p`
  font-size : 16px;
  margin-bottom : 8px;
`;

// 가운데 정렬 서술 텍스트
export const CenterDesc14 = styled.p`
  font-size : 14px;
  text-align : center;
  margin-bottom : 8px;
`;


// 왼쪽 정렬 서술 텍스트
export const LeftDesc14 = styled.p`
  font-size : 14px;
  margin-bottom : 8px;
`;

// 흐린 글자 중앙
export const CenterWeakDesc14 = styled.p`
  font-size : 14px;
  text-align : center;
  margin-bottom : 8px;
  color : ${colors.weakColor}
`;

// 흐린 글자 왼쪽
export const LeftWeakDesc14 = styled.p`
  font-size : 14px;
  margin-bottom : 8px;
  color : ${colors.weakColor}
`;

// --- 부가 설명, 키워드 텍스트 ---

export const SubText14 = styled.span`
  font-size : 14px;
  color : ${colors.weakColor};
`;

export const SubText12 = styled.span`
  font-size : 12px;
  color : ${colors.weakColor};
`;

// --- 인포 및 경고 ---

