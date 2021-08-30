import { useRef, useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";

export default function Member() {

    const { memId } = useParams();
    const history = useHistory();
    const memoRef = useRef(null);
    // console.log(id);

    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState([]);
    const [sex, setSex] = useState([]);
    const [day, setDay] = useState([]);
    const [time, setTime] = useState([]);
    const [created, setCreated] = useState([]);
    const [memo, setMemo] = useState([]);
    // const [member, setMember] = useState(); ??

    useEffect(() => {
        axios.get(`/api/member/${memId}`)
        .then(response => {
            setName(response.data[0].name);
            setSex(response.data[0].sex);
            setDay(response.data[0].day);
            setTime(response.data[0].time);
            setCreated(response.data[0].createdAt.substr(0,10));
            setMemo(response.data[0].memo);
            setIsLoading(false);
        });
    }, [memId]);

    const onMemDelete = () => {
        axios.delete(`/api/member/${memId}`)
        // .then (response => console.log(response.data))
        alert("회원 삭제가 완료되었습니다.")
        history.push(`/`)
    };

    const onMemoSave = () => {
        axios.put(`/api/member/${memId}/editMemo`, {
            memo : memoRef.current.value
        })
        alert("메모가 저장되었습니다.")
        // history.push(`/`)
    }
    

    return (
    <>
        {isLoading ? "Loading data..." : 
        <div>
            <div className="miniBox">
                <h2>{name} 회원</h2>
                <Link to={`/EditMember/${memId}`} className="edit">회원 수정</Link>
            </div>
            
            <div className="memberBox">
                <div>- 성별 : {sex}</div>
                <div>- 요일 : {day}</div>
                <div>- 시간 : {time}시</div>
                <div>- 등록일 : {created}</div>
            </div>

            <div className="mid_text">회원 기록</div>
            <div className="memo_area">
                <textarea type="text" defaultValue={memo} placeholder="메모를 작성하세요." ref={memoRef} className="memo"></textarea>
                <button className="btn_save" onClick={() => onMemoSave()}>저장</button>
            </div>
            <button onClick={() => onMemDelete()}>회원 삭제</button>
        </div>
        }
        
    </>
    );
}