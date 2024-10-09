import React from 'react';


import { RoutineBox } from '../../styles/RoutineBox';
import { LeftPageTitle  } from '../../styles/textStyles';
import DogCalendar from './widgets/DogCalendar';

import DashBoard from './widgets/DashBoard';


function Home(props) {

  const isAuth = false;

  return (
    <>
      <LeftPageTitle className='hide'>홈 화면</LeftPageTitle>

      <DashBoard />


      <DogCalendar />


      <RoutineBox isAuth={isAuth} />
    </>
  );
}

export default Home;