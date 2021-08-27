// import dummy from "../db/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DayList() {
    // const days = useFetch('http://localhost:3001/days');
    
    const [days, setDays] = useState([]);
    
    useEffect(() => {
        axios.get(`/api/day`)
        .then(response => {
            setDays(response.data);
        });
    }, []);


    if (days.length === 0){
        return <span>Loading...</span>
    }

    return (
    <>
        <ul className="list_day">
            {days.map( day => (
                <li key={day._id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
            <li></li>
        </ul>
    </>
    );
}