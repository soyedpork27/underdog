import React from 'react';
import Header from './widgets/Header';


import TopBox from './widgets/TopBox';
import Main from './widgets/Main';
import { ScrollContextProvider } from '../../contexts/scrollContext/scrollContext';

function Index(props) {
  return (
    <>
    <ScrollContextProvider>
      <TopBox />
      <span className='main_margin'>0</span>
      <Main />
      <Header />
    </ScrollContextProvider>
    </>
  );
}

export default Index;