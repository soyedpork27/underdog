import React from 'react';
import { CenterDesc16, CenterPageTitle } from '../../styles/textStyles';
import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <>
      <CenterPageTitle>404 Not Found</CenterPageTitle>
      <br />
      <CenterDesc16>잘못된 경로입니다.</CenterDesc16>
      <br />
      <CenterDesc16><Link to='/' className='link_text'>홈으로 돌아가기</Link></CenterDesc16>
      
    </>
  );
}

export default NotFound;