import React, {useContext} from 'react';

import { FaAngleLeft } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";

import '../../../css/topbox.css';
import { scrollContext } from '../../../contexts/scrollContext/scrollContext';

function TopBox(props) {

  const {topView} = useContext(scrollContext);

  const topStyleInScroll = {
    top : topView?'0px':'-40px'
  }

  return (
    <div className='TOPBOX' style={topStyleInScroll}>

      <FaAngleLeft className='icons prev_icon'/>

      <h1>
        UNDERDOG
      </h1>


      <IoIosSettings className='icons setting_icon'/>

    </div>
  );
}

export default TopBox;