// import dummy from "../db/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    // const days = useFetch('http://localhost:3001/days');
    
    const [days, setDays] = useState([]);
    useEffect(() => {
        // 목록 조회 요청 전송
        axios.get(`/api/todo`)
        // 응답이 돌아오면 응답 내용으로 목록을 변경
        .then(response => {
            setDays(response.data);
        });
    }, []);


    // useEffect(()=> {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // }, []);  //카운트(의존성배열)가 수정되었을 때만 위 함수 실행, 빈 배열->딱 한번

    if (days.length === 0){
        return <span>Loading...</span>
    }

    return (
    <>
        <ul className="list_day">
            {days.map( day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
            <li></li>
        </ul>
    </>
    );
}