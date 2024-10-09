import React from 'react';
import Index from '../Index/Index';
import Home from '../Home/Home';
import Routine from '../Routine/Routine';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Exercise from '../Exercise/Exercise';
import MyPage from '../MyPage/MyPage';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

function Router(props) {

  

  const router = createBrowserRouter([{
      path : '/',
      element : <Index />,
      children : [
      {
        index : true,
        element : <Home />
      },
      {
        path : '/routine',
        element : <Routine />
      },
      {
        path : "/exercise",
        element : <Exercise />
      },
      {
        path : "/mypage",
        element : <MyPage />
      },
      {
        path : '/mypage/login',
        element : <Login />
      },
      {
        path : '/mypage/register',
        element : <Register />
      },
      {
        path : '*',
        element : <NotFound />
      }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default Router;