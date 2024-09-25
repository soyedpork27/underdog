import React from 'react';
import { Link } from 'react-router-dom';


import '../../../css/header.css';

import { GoHomeFill } from "react-icons/go";
import { FaListCheck } from "react-icons/fa6";
import { PiBarbellFill } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";



function Header(props) {

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
  ]

  return (
    <>
      <header>


        <nav className='GNB_wrap'>
          <ul className='GNB'>
            {GNB.map((item)=>(<li className='GNB_list'><Link to={`${item.path}`}>
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