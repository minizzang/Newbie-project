import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {

    // const days = useFetch("http://localhost:3001/days")
    const history = useHistory();

    const [days, setDays] = useState([]);
    const [days1, setDays1] = useState([]);
    // useEffect(() => {
    //     // 목록 조회 요청 전송
    //     axios.get(`http://localhost:3002/todo`)
    //     // 응답이 돌아오면 응답 내용으로 목록을 변경
    //     .then(response => {
    //         setDays(response.data);
    //     });
    // }, []);

    function addDay(){
        // fetch(`http://localhost:3001/days/`, {
        //     method: 'POST',
        //     headers : {
        //         'Content-Type' : 'application/json',
        //     },
        //     body : JSON.stringify({
        //         day : days.length + 1
        //     }),
        //     }).then(res => {
        //         if(res.ok){
        //             alert("생성이 완료되었습니다.")
        //             history.push(`/`)
        //         }
        // });
        console.log("click1")
        axios.post(`/api/todo`, {
            day : 1
          })
          // 완료 후 목록 조회 요청 전송
          .then(res => {
            setDays1(res.data);
              if(res.ok){
                  alert("완료")
                  history.push(`/`)
              }
        })
        console.log("click2")
          // 응답이 돌아오면 응답 내용으로 목록을 변경
    }
    
    return(
        <div>
            <h3>현재 일수 : {days1.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    )
}