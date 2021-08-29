import { useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddMember(){

    const history = useHistory();
    const [member, setMember] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const nameRef = useRef(null);
    const sexRef = useRef(null);
    const dayRef = useRef(null);
    const timeRef = useRef(null);

    function onSubmit(e){
        e.preventDefault();

        if(!isLoading) {
            setIsLoading(true);
            axios.get(`/api/member/cell/${timeRef.current.value}/${dayRef.current.value}`)
            .then(response => {
                setMember(response.data)
            })
            if (member[0] == null) {
                alert("중복된 요일, 시간이 존재합니다.")
                setIsLoading(false);
            }
            else {
                axios.post(`/api/member`, 
                    {
                        name : nameRef.current.value,
                        sex : sexRef.current.value,
                        day : dayRef.current.value,
                        time : timeRef.current.value,
                    }
                )
                alert("회원이 추가되었습니다.")
                history.push(`/`)
                setIsLoading(false);
            }
          };
    }

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
                    <option value="mon">월</option>
                    <option value="tue">화</option>
                    <option value="wed">수</option>
                    <option value="thu">목</option>
                    <option value="fri">금</option>
                </select>
            </div>

            <div className="input_area">
                <label>시간</label>
                <select ref={timeRef}>
                    <option value="9">9시</option>
                    <option value="10">10시</option>
                    <option value="11">11시</option>
                    <option value="12">12시</option>
                    <option value="13">13시</option>
                    <option value="14">14시</option>
                    <option value="15">15시</option>
                    <option value="16">16시</option>
                    <option value="17">17시</option>
                    <option value="18">18시</option>
                </select>
            </div>
            <button
                style={{
                    opacity: isLoading ? 0.3 : 1
                }}
            >{isLoading ? "Saving..." : "등록"}</button>
        </form>
    )
}