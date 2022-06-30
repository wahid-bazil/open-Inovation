import {BiLogOutCircle} from "react-icons/bi"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Istate} from "../../store";

const HeaderIndex = () => {
    const navigate = useNavigate();
    const moveTo = () => {
        navigate("/auth")
    }
    //const
    const userName = localStorage.getItem("username")
    const category = localStorage.getItem("title")

    return (
        <div className="HeaderIndex">
            <div className="top-side">
                <div>

                </div>
                <div onClick={moveTo} className="logOut">
                    <i><BiLogOutCircle/></i>
                    <span>
                        Log out
                    </span>
                </div>
            </div>
            <div className="bottom-side">
                <div className="userName">
                    <span>{userName}</span>
                </div>
                <div className="category">
                    <span>{category}</span>
                </div>
            </div>
        </div>
    )
}
export default HeaderIndex