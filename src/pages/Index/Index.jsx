import React from 'react';
import Header from './widgets/Header';

import {Outlet} from 'react-router-dom';
import TopBox from './widgets/TopBox';

function Index(props) {
  return (
    <>
      <TopBox />
      <span className='main_margin'>0</span>
      <main>
        <Outlet />
      </main>
      <Header />
    </>
  );
}

export default Index;