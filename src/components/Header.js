import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">스케줄러</Link>
            </h1>
            <div className="menu">
                <Link to="/AddTodo" className="link">Todo 추가</Link>
                <Link to="/AddDay" className="link">날짜 추가</Link>
            </div>
        </div>
    )
}