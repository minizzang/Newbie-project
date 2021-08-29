import { useEffect, useState } from "react";
import axios from "axios";
import CellItem from "./CellItem";

export default function TableCell( props ) {

    const [member, setMember] = useState([]);
   
    useEffect(() => {
        axios.get(`/api/member/cell/${props.time}/${props.day}`)
        .then(response => {
            setMember(response.data);
        });
            // console.log("this is from weekTable!!");
            // console.log(props.time);
            
            // console.log(name);
            // name = member[0].name;
    }, []);

    const todoItemEls = member.map(v => (
        <CellItem
          key={v._id}
          name={v.name}
        //   done={v.done}
        //   onFinishClick={() => onFinishClick(v)}
        //   onDeleteClick={() => onDeleteClick(v)}
        />
      ));

    return (
        <>
            <td>{todoItemEls}</td>
        </>
    )
}