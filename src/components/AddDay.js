import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AddDay() {

    const history = useHistory();

    const [days, setDays] = useState([]);

    useEffect(() => {
        axios.get(`/api/day`)
        .then(response => {
            setDays(response.data);
        });
    }, []);

    function create_day(){

        console.log("click1")
        axios.post(`/api/day`, 
            { day : days.length + 1 }
        )
          .then(() => axios.get(`/api/day`))
          .then(response => {
            setDays(response.data);
            // 조건 거는 법?
            alert("생성이 완료되었습니다.")
            history.push(`/`)
          });
        
        console.log("click2")
    }
    
    return(
        <div>
            <h3>현재 Day 수 : {days.length}일</h3>
            <button onClick={create_day}>날짜 추가</button>
        </div>
    )
}