import React, {useRef, useEffect, useContext} from 'react';
import {Outlet} from 'react-router-dom';

import {scrollContext} from '../../../contexts/scrollContext/scrollContext';

function Main(props) {

  const mainRef = useRef(null);
  const scrollRef = useRef(0);

  const {handleTopView, topView} = useContext(scrollContext);

  useEffect(()=>{

    // scrollTop 값이 커지면 => false : 숨김
    // scrollTop 값이 작아지면 => true : 보여줌

    // 스크롤 시 발생시킬 이벤트
    const handleScrollEvent = () => {

      const getScrollTop = parseInt(mainRef.current.scrollTop);

      
      const clientHeight = mainRef.current.clientHeight;
      const scrollHeight = mainRef.current.scrollHeight;

      // 모바일 환경에서 최상단으로 스크롤 될 경우 버그 수정을 위한 조건문 
      if(getScrollTop===0){
        handleTopView(true);
        return;
      }

      if(scrollRef.current===getScrollTop){
        return ;
      }

      // 최하단으로 스크롤 될 경우 버그 수정
      if (getScrollTop + clientHeight >= scrollHeight) {
        handleTopView(false);
        return;
      }


      if(scrollRef.current < getScrollTop){
        // 스크롤이 아래로 되는 상황임
        if(topView){
          handleTopView(false);
          scrollRef.current = getScrollTop - 1;

        }
      }else if(scrollRef.current > getScrollTop){
        // 스크롤이 위로 되는 상황임
        if(!topView){
          handleTopView(true);
          scrollRef.current = getScrollTop + 1;
        }
      }

    }

    // 스크롤 액션에 이벤트 할당
    mainRef.current.addEventListener('scroll', handleScrollEvent)
  },[handleTopView, topView]);

  
  // 스크롤 시 메인 태그에 할당
  const mainStyleInScroll = {
    marginTop : topView?'40px':'0px',
    height : `calc(100% - ${topView?'100px':'60px'})`
  }

  return (
    <>
      <main className='main_default' ref={mainRef} style={mainStyleInScroll}>
        <Outlet />
      </main>
    </>
  );
}

export default Main;