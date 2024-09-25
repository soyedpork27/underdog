import {createContext, useState} from 'react';

export const scrollContext = createContext();

export function ScrollContextProvider({children}){

  const [topView, setTopView] = useState(true);

  // 스크롤값 핸들러
  const handleTopView = (bool) => {
    setTopView(bool);
  }

  return (<scrollContext.Provider value={{topView, handleTopView}}>{children}</scrollContext.Provider>)
}