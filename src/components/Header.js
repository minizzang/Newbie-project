import {Link} from "react-router-dom";
import HeaderImage from "../images/backImage.jpg"

export default function Header() {
    return (
        <div className="header">
            {/* <div className="image">
               <img src={HeaderImage}/> 
            </div> */}
            <h1>
                <Link to="/">미니 헬스장</Link>
            </h1>
            <div className="btn_add">
                <Link to="/AddMember" className="link">회원 등록</Link>
                {/* <Link to="/AddDay" className="link">날짜 추가</Link> */}
            </div>
        </div>
    )
}