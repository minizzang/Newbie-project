import { useEffect, useState } from "react";
import axios from "axios";
import WeekItem from "./WeekItem";

export default function WeekTable({ time }) {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get(`/api/member/time/${time}`)
        .then(response => {
            setMembers(response.data);
        })
            console.log("this is from weekTable");
            // console.log(members);
    }, [time]);

    // const memberElms = () => members.map(v => (
    //     <WeekItem 
    //         // key={v._id}
    //         // name={v.name}
    //         // day={v.day}
    //     />
    // ));
    // const memberElms = <WeekItem member={members}/>
    // console.log(members);

    return (
        <>
            <td><WeekItem member={members}/></td>
        </>
    )
}