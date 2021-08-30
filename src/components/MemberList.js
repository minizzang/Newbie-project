import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MemberList() {
    
    const [members, setMembers] = useState([]);
    
    useEffect(() => {
        axios.get(`/api/member`)
        .then(response => {
            setMembers(response.data);
        });
    }, []);


    if (members.length === 0){
        return <span>Loading...</span>
    }

    return (
    <>
        <div className="word">회원 명단</div>
        <ul className="list_member">
            {members.map( member => (
                <li key={member._id}>
                    <Link to={`/member/${member._id}`}>{member.name}</Link>
                </li>
            ))}
            <li></li>
        </ul>
    </>
    );
}