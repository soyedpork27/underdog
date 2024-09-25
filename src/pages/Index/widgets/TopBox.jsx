import React from 'react';

import { FaAngleLeft } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";

import '../../../css/topbox.css';

function TopBox(props) {
  return (
    <div className='TOPBOX'>

      <FaAngleLeft className='icons prev_icon'/>

      <h1>
        UNDERDOG
      </h1>


      <IoIosSettings className='icons setting_icon'/>

    </div>
  );
}

export default TopBox;