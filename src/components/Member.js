import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function Member() {

    const { memId } = useParams();
    const history = useHistory();
    // console.log(id);

    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState([]);
    const [sex, setSex] = useState([]);
    const [day, setDay] = useState([]);
    const [time, setTime] = useState([]);
    const [created, setCreated] = useState([]);
    // const [member, setMember] = useState(); ??

    useEffect(() => {
        axios.get(`/api/member/${memId}`)
        .then(response => {
            setName(response.data[0].name);
            setSex(response.data[0].sex);
            setDay(response.data[0].day);
            setTime(response.data[0].time);
            setCreated(response.data[0].createdAt.substr(0,10));
            setIsLoading(false);
        });
    }, [memId]);

    const onMemDelete = () => {
        axios.delete(`/api/member/${memId}`)
        // .then (response => console.log(response.data))
        alert("회원 삭제가 완료되었습니다.")
        history.push(`/`)
    };
    

    return (
    <>
        {isLoading ? "Loading data..." : 
        <div>
            <h2>{name} 회원</h2>
            <button onClick={() => onMemDelete()}>Delete</button>
            <div>성별 : {sex}</div>
            <div>요일 : {day}</div>
            <div>시간 : {time}시</div>
            <div>등록일 : {created}</div>
        </div>
        }
        
    </>
    );
}