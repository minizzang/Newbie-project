// import dummy from "../db/data.json";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Word from "./Word.js";
import axios from "axios";

export default function Day() {


    const {day} = useParams();
    const history = useHistory();

    const [words, setWords] = useState([]);

    useEffect(() => {
        axios.get(`/api/todo`)
        .then(response => {
            setWords(response.data);
        });
    }, []);

    const onDayDelete = () => {
        axios.delete(`/api/day/${day}`, {
            params: {
                day: day
          }})
        .then (response => console.log(response.data))
        alert("삭제가 완료되었습니다.")
        history.push(`/`)
    };

    return (
    <>
        <h2>Day {day}
        </h2>
        <button onClick={() => onDayDelete()}>Delete</button>
        <div> {words.length === 0 && <span>Loading...</span>} </div>
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word._id}/>
                ))}
            </tbody>
        </table>
    </>
    );
}