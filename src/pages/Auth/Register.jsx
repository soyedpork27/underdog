import React, {useState} from 'react';

import './css/userform.css';
import { CenterPageTitle } from '../../styles/textStyles';


function Register(props) {

  const [data,setData] = useState({
    id : '',
    pw : '',
    email : '',
  });

  function emailValidatior(email) {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }

  const emailChk = emailValidatior(data.email);

  const [pw2, setPw2] = useState('');

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

  const handlePw2 = (e) => {
    let value = e.target.value;
    // 공백을 정규식으로 제거
    const spaceExp = new RegExp(/\s/,'g');
    value = value.replaceAll(spaceExp,'');
    setPw2(value);
  }

  return (
    <section className='form_section'>
      {/* <h2 className='form_title'>회원가입</h2> */}

      <CenterPageTitle>회원가입</CenterPageTitle>

      <p className='form_msg'><span className='warning_txt'>*</span> 표시는 필수 입력 항목입니다.</p>
      <form className='user_form' onSubmit={handleSubmit}>

        <div className='form_input_box'>
          <label htmlFor="id"><span className='warning_txt'>*</span>아이디</label>
          <input type="text" id='id' name='id' value={data.id} onChange={handleChange} placeholder='아이디' />
        </div>

        <div className='form_input_box'>
          <label htmlFor="pw"><span className='warning_txt'>*</span>비밀번호</label>
          <input type="password" id='pw' name='pw' autoComplete='off' value={data.pw} onChange={handleChange} placeholder='비밀번호' />
        </div>

        <div className='form_input_box'>
          <label htmlFor="pw2"><span className='warning_txt'>*</span>비밀번호 확인</label>
          <input type="password" id='pw2' name='pw2' autoComplete='off' value={pw2} onChange={handlePw2} placeholder='비밀번호 확인' />
          {data.pw !== pw2&& <p className='form_warning_txt'>비밀번호가 일치하지 않습니다!</p>}
          {(data.pw !=='' && data.pw===pw2) && <p className='form_clear_txt'>비밀번호가 일치합니다.</p> }
        </div>

        <div className='form_input_box'>
          <label htmlFor="email"><span className='warning_txt'>*</span>이메일</label>
          <input type="email" id='email' name='email' value={data.email} onChange={handleChange} placeholder='email@example.com' />
          {!emailChk&&<p className='form_warning_txt'>유효하지 않은 이메일 양식입니다!</p>}
        </div>

        <button type='submit' className='user_form_btn'>회원가입</button>

      </form>

    </section>
  );
}

export default Register;