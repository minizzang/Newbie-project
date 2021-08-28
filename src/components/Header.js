import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">미니 헬스장</Link>
            </h1>
            <div className="menu">
                <Link to="/AddMember" className="link">회원 추가</Link>
                <Link to="/AddDay" className="link">날짜 추가</Link>
            </div>
        </div>
    )
}