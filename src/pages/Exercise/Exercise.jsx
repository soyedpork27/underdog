import React, { useEffect, useState } from 'react';
import { LeftPageTitle } from '../../styles/textStyles';

import {httpRequest} from '../../utils/httpRequest.js';

function Exercise(props) {

  
  const bodyPart = [
    {
      partId : 0,
      part : '전체'
    },
    {
      partId : 1,
      part : '등'
    },
    {
      partId : 2,
      part : '하체'
    },
    {
      partId : 3,
      part : '가슴'
    },
    {
      partId : 4,
      part : '어깨'
    },
    {
      partId : 5,
      part : '팔'
    }
  ];

  const [exercises,setExercises] = useState([]);

  const [part, setPart] = useState(undefined);

  const [search, setSearch] = useState('');

  useEffect(()=>{

    httpRequest.get((`/exercise/?part=${part}`))
      .then(res => {
        setExercises(res.data);
      })
      .catch(console.info);

  },[part]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const keyWord = search.trim();

    const response = await httpRequest.post('/exercise/search', {keyWord});


    console.log(response.data.message);

  }

  const handleSearch = (e) => {

    const keyWord = e.target.value===' '?'':e.target.value;

    setSearch(keyWord);
  }

  return (
    <>
      <LeftPageTitle>운동</LeftPageTitle>

      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleSearch} placeholder='운동 검색' />
        <button type='submit'>
          검색
        </button>
      </form>

      <div>
        {/* 부위 탭 버튼들 */}
        {bodyPart.map((part, idx) => {
          if(part.partId===0){
            return (<button type='button' onClick={()=>setPart(undefined)} key={idx} >
                {part.part}
              </button>)
          }else{
            return (<button type='button' onClick={()=>setPart(part.part)} key={idx} >
                {part.part}
              </button>)
          }
        })}
      </div>

      
    
      {exercises.map((exercise,idx) => (<div key={idx}>
        <h2>
          {exercise.exeName}
        </h2>
        <p>
          {exercise.exePart}
        </p>
        <p>
          {exercise.exeDesc}
        </p>
      </div>))}

      
    </>
  );
}

export default Exercise;