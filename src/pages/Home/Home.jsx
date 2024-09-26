import React from 'react';
import { RoutineBox } from '../../styles/RoutineBox';
import { LeftPageTitle  } from '../../styles/textStyles';


function Home(props) {

  const isAuth = false;

  return (
    <>
      <LeftPageTitle>홈 화면</LeftPageTitle>

      <RoutineBox isAuth={isAuth} />
    </>
  );
}

export default Home;