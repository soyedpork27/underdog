import React from 'react';
import { Link, useLocation } from 'react-router-dom';


import '../../../css/header.css';

import { GoHomeFill } from "react-icons/go";
import { FaListCheck } from "react-icons/fa6";
import { PiBarbellFill } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";

// 소셜 아이콘
// import { GrGroup } from "react-icons/gr";



function Header(props) {

  // GNB 요소 선택 시 서식 적용을 위한 pathname
  const pathname = useLocation().pathname.slice(1).split('/')[0];

  // GNB 요소 배열 리스트
  const GNB = [
    {
      text : "홈",
      path : '/',
      icon : <GoHomeFill />
    },
    {
      text : "루틴",
      path : "/routine",
      icon : <FaListCheck />
    },
    {
      text : "운동",
      path : "/exercise",
      icon : <PiBarbellFill />
    },
    {
      text : "내 정보",
      path : "/mypage",
      icon : <IoPerson />
    }
  ];

  return (
    <>
      <header>

        <nav className='GNB_wrap'>
          <ul className='GNB'>
            {GNB.map((item,idx)=>(<li key={idx} className={`GNB_list ${item.path.slice(1)===pathname?'on':''}`}><Link to={`${item.path}`}>
              <span className={`GNB_icon `}>
                {item.icon}
              </span>
            <span className={`GNB_text `}>{item.text}</span></Link></li>))}
          </ul>
        </nav>
        
      </header>
    </>
  );
}

export default Header;