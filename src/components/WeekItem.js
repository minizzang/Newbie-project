import { useState } from "react";

export default function WeekItem(props) {

    const [mon, setMon] = useState('');
    const [tue, setTue] = useState('');

    function sorting(item) {
        if (item.day === "mon") setMon( item.name )
        else if (item.day === "tue") setTue( item.name )
        // else if (item.day === "wed") setSortMem({ ...sortMem, wed : item.name })
        // else if (item.day === "thu") setSortMem({ ...sortMem, thu : item.name })
        // else if (item.day === "fri") setSortMem({ ...sortMem, fri : item.name })
    }

    function weekArray( items ) {
        items.map( v => sorting(v))
    }
    // { props.member.map(v => sorting(v)) }
    console.log("hi");
    // console.log( props.member[0].name)

    return (
        props.member.map(v => {
            <>{ v.name }</>
        })
            // {weekArray(props.member)}
            // <td>{mon}</td>
            // <td>{tue}</td>
    )
}