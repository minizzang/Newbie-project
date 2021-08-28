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
        <ul className="list_day">
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