import TableCell from "./TableCell";
import WeekTable from "./WeekTable";

export default function TimeTable() {
    return (
        <div className="TableContainer">
            {/* <h2></h2> */}
            <table>
                <thead>
                    <tr className="firstRow">
                        <th></th>
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
                        <TableCell time="9" day="mon"/>
                        <TableCell time="9" day="tue"/>
                        <TableCell time="9" day="wed"/>
                        <TableCell time="9" day="thu"/>
                        <TableCell time="9" day="fri"/>
                        {/* <WeekTable time="9"/> */}
                    </tr>
                    <tr>
                        <th scope="row">10시</th>
                        <TableCell time="10" day="mon"/>
                        <TableCell time="10" day="tue"/>
                        <TableCell time="10" day="wed"/>
                        <TableCell time="10" day="thu"/>
                        <TableCell time="10" day="fri"/>
                    </tr>
                    <tr>
                        <th scope="row">11시</th>
                        <TableCell time="11" day="mon"/>
                        <TableCell time="11" day="tue"/>
                        <TableCell time="11" day="wed"/>
                        <TableCell time="11" day="thu"/>
                        <TableCell time="11" day="fri"/>
                    </tr>
                    <tr>
                        <th scope="row">12시</th>
                        <TableCell time="12" day="mon"/>
                        <TableCell time="12" day="tue"/>
                        <TableCell time="12" day="wed"/>
                        <TableCell time="12" day="thu"/>
                        <TableCell time="12" day="fri"/>
                    </tr>
                    <tr>
                        <th scope="row">13시</th>
                        <TableCell time="13" day="mon"/>
                        <TableCell time="13" day="tue"/>
                        <TableCell time="13" day="wed"/>
                        <TableCell time="13" day="thu"/>
                        <TableCell time="13" day="fri"/>
                    </tr>
                    <tr>
                        <th scope="row">14시</th>
                        <TableCell time="14" day="mon"/>
                        <TableCell time="14" day="tue"/>
                        <TableCell time="14" day="wed"/>
                        <TableCell time="14" day="thu"/>
                        <TableCell time="14" day="fri"/>
                    </tr>
                    <tr>
                        <th scope="row">15시</th>
                        <TableCell time="15" day="mon"/>
                        <TableCell time="15" day="tue"/>
                        <TableCell time="15" day="wed"/>
                        <TableCell time="15" day="thu"/>
                        <TableCell time="15" day="fri"/>
                    </tr>
                    <tr>
                        <th scope="row">16시</th>
                        <TableCell time="16" day="mon"/>
                        <TableCell time="16" day="tue"/>
                        <TableCell time="16" day="wed"/>
                        <TableCell time="16" day="thu"/>
                        <TableCell time="16" day="fri"/>
                    </tr>
                    <tr>
                        <th scope="row">17시</th>
                        <TableCell time="17" day="mon"/>
                        <TableCell time="17" day="tue"/>
                        <TableCell time="17" day="wed"/>
                        <TableCell time="17" day="thu"/>
                        <TableCell time="17" day="fri"/>
                    </tr>
                    <tr>
                        <th scope="row">18시</th>
                        <TableCell time="18" day="mon"/>
                        <TableCell time="18" day="tue"/>
                        <TableCell time="18" day="wed"/>
                        <TableCell time="18" day="thu"/>
                        <TableCell time="18" day="fri"/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}