import { useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateWord(){

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e){
        e.preventDefault();

        if(!isLoading) {
            setIsLoading(true);

            axios.post(`/api/todo`, 
            {
                name : nameRef.current.value,
                sex : sexRef.current.value,
                day : dayRef.current.value,
                time : timeRef.current.value,
            }
            )
          .then(() => axios.get(`/api/day`))
          alert("생성이 완료되었습니다.")
          history.push(`/`)
          setIsLoading(false);
          };
    }


            // fetch(`http://localhost:3001/words/`, {
            //     method: 'POST',
            //     headers : {
            //         'Content-Type' : 'application/json',
            //     },
            //     body : JSON.stringify({
            //         day : dayRef.current.value,
            //         eng : engRef.current.value,
            //         kor : korRef.current.value,
            //         isDone : false
            //     }),
            //     }).then(res => {
            //         if(res.ok){
            //             alert("생성이 완료되었습니다.")
            //             history.push(`/day/${dayRef.current.value}`)
            //             setIsLoading(false);
            //         }
            // });

    const nameRef = useRef(null);
    const sexRef = useRef(null);
    const dayRef = useRef(null);
    const timeRef = useRef(null);
    

    return (
        <form onSubmit={onSubmit}>
            

            <div className="input_area">
                <label>이름</label>
                <input type="text" placeholder="ex) 홍길동" ref={nameRef}></input>
            </div>

            <div className="input_area">
                <label>성별</label>
                <select ref={sexRef}>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>
            </div>

            <div className="input_area">
                <label>요일</label>
                {/* <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select> */}
                <select ref={dayRef}>
                    <option value="9">월</option>
                    <option value="10">화</option>
                    <option value="11">수</option>
                    <option value="12"></option>
                </select>
            </div>

            <div className="input_area">
                <label>시간</label>
                <select ref={timeRef}>
                    <option value="male">9시</option>
                    <option value="female">10시</option>
                </select>
            </div>
            <button
                style={{
                    opacity: isLoading ? 0.3 : 1
                }}
            >{isLoading ? "Saving..." : "저장"}</button>
        </form>
    )
}