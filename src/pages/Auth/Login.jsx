import React, {useState} from 'react';

import './css/userform.css';
import { CenterPageTitle } from '../../styles/textStyles';
import { MainBlockBtn } from '../../styles/btnStyles';
import { Link } from 'react-router-dom';

function Login(props) {

  const [data,setData] = useState({
    id : '',
    pw : ''
  });

  const handleChange = (e) => {
    const target = e.target.name;
    let value = e.target.value;

    // 공백을 정규식으로 제거
    const spaceExp = new RegExp(/\s/,'g');
    value = value.replaceAll(spaceExp,'');

    setData((prev) => {
      const result = {...prev};
      result[target] = value;
      return {...result};
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='form_section'>

      <CenterPageTitle>로그인</CenterPageTitle>

      <form className='user_form' onSubmit={handleSubmit}>

        <div className='form_input_box'>
          <label htmlFor="id">아이디</label>
          <input type="text" id='id' name='id' value={data.id} onChange={handleChange} placeholder='아이디' />
        </div>

        <div className='form_input_box'>
          <label htmlFor="pw">비밀번호</label>
          <input type="password" id='pw' name='pw' autoComplete='off' value={data.pw} onChange={handleChange} placeholder='비밀번호' />
        </div>

        <MainBlockBtn type='submit'>로그인</MainBlockBtn>

        <p>계정이 없다면? <Link to='/mypage/register'>회원가입</Link></p>

      </form>
      
    </section>
  );
}

export default Login;