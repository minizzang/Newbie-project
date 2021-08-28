import { useEffect, useState } from "react";
import axios from "axios";

export default function WeekTable({ time:t }) {

    const [members, setMembers] = useState([]);
    const [sortMem, setSortMem] = useState({
        mon : "",
        tue : "",
        wed : "",
        thu : "",
        fri : ""
    });

    function sorting(item) {
        if (item.day === "mon") setSortMem({ ...sortMem, mon : item.name })
        else if (item.day === "tue") setSortMem({ ...sortMem, tue : item.name })
        else if (item.day === "wed") setSortMem({ ...sortMem, wed : item.name })
        else if (item.day === "thu") setSortMem({ ...sortMem, thu : item.name })
        else if (item.day === "fri") setSortMem({ ...sortMem, fri : item.name })
    }


    useEffect(() => {
        // k = 2;
        axios.get(`/api/member/time/${t}`)
        .then(response => {
            setMembers(response.data);
        });
            console.log("this is from weekTable");
            console.log(t);
            console.log(members);
    }, [t]);


    return (
        <>
            <td>{sortMem.mon}</td>
            <td>{sortMem.tue}</td>
            <td>{sortMem.wed}</td>
            <td>{sortMem.thu}</td>
            <td>{sortMem.fri}</td>
        </>
    )
}