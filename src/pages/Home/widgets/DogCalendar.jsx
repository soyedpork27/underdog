import React, { useState } from 'react';

// 리액트 캘린더
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CenterTitle3 } from '../../../styles/textStyles';

// 왕관 아이콘
import { FaCrown } from "react-icons/fa6";


import '../../../css/homecalendar.css';

function DogCalendar(props) {

  // 월만 표시하는 함수
  // const formatMonth = (_, date) => {
  //   return date.toLocaleString('default', { month: 'long' });
  // };


  // 현재 시간대의 오프셋 (밀리초 단위)
  const offset = new Date().getTimezoneOffset() * 60000;

  const [value, onChange] = useState(new Date());

  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const exerciseDays = ['2024-09-27', '2024-09-21', '2024-09-08', '2024-09-22', '2024-09-29']; // 운동한 날짜 배열

  const tileContent = ({ date, view }) => {
    // 일 단위 보기에서만 표시
    if (view === 'month') {
      const currentDate = new Date(date.getTime() - offset); // 오프셋을 더하여 한국 시간으로 변환
      const currentDateString = currentDate.toISOString().split('T')[0];

      if (exerciseDays.includes(currentDateString)) {
        return <div className="highlight">
          <FaCrown />
        </div>; // 운동한 날에 아이콘 표시
      }
    }
  };


  const handleCalendarToday = () => {
    const today = new Date();
    onChange(()=>{
      setActiveStartDate(today);
      return today;
    });
    // setActiveStartDate(today);
  }

  return (
    <article className='DOG_CALENDAR'>
      <CenterTitle3>운동 기록</CenterTitle3>

      <span className='CAL_work_info'>
        <FaCrown className='orange' /> : 운동한 날
      </span>

      <button className='todayBtn' onClick={handleCalendarToday}>
        이번 달
      </button>

      <Calendar
        calendarType="gregory"
        prev2Label={null}
        next2Label={null}
        formatDay={(_, date) => date.getDate()}
        // formatMonthYear={formatMonth}
        tileContent={tileContent}
        value={value}
        onChange={onChange}
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)} // 달 변경 시 업데이트

        minDetail="month" // 최소 상세 수준을 "월"로 설정 (일별 타일 유지)
        maxDetail="month" // 최대 상세 수준을 "월"로 설정 (연/월 변경 방지)
      />
    </article>
  );
}

export default DogCalendar;