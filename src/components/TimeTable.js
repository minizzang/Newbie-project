import WeekTable from "./WeekTable";

export default function TimeTable() {
    return (
        <>
            <h2>Timetable</h2>
            <table>
                <thead>
                    <tr>
                        <th>시간\요일</th>
                        <th scope="col">월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">9시</th>
                        <WeekTable time="9" key="9"/>  
                        {/* key를 넣어야하나?? key={word._id} */}
                    </tr>
                    <tr>
                        <th scope="row">10시</th>
                        <td>18,000</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}