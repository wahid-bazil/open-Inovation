import {BiLogOutCircle} from "react-icons/bi"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Istate} from "../../store";

const HeaderIndex = () => {
    const navigate = useNavigate();
    const moveTo = () => {
        navigate("/login")
    }
    //const
    const firstname = localStorage.getItem("firstname")
    const lastname = localStorage.getItem('lastname')
    const titleValue = localStorage.getItem("titleValue")
    const prefix = localStorage.getItem("prefix")

    /*  localStorage.setItem('firstname', action.payload.firstname.toString());
      localStorage.setItem('lastname', action.payload.lastname.toString());
      localStorage.setItem('titleValue', action.payload.titleValue.toString());
      localStorage.setItem('prefix', action.payload.prefix.toString());*/

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
                    <span>{prefix + " " + firstname + " " + lastname}</span>
                </div>
                <div className="category">
                    <span>{titleValue}</span>
                </div>
            </div>
        </div>
    )
}
export default HeaderIndex