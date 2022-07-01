import HeaderIndex from "../header";

import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Layout:React.FC<any> = (props) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("userId") || !localStorage.getItem("title") || !localStorage.getItem("username")) {
            navigate("/login")
        }
        /*  localStorage.setItem('userId', action.payload.id.toString());
      localStorage.setItem('title', action.payload.title.toString());
      localStorage.setItem('username', action.payload.username.toString());*/
    }, [])


    return (
        <div className="layout">
            <HeaderIndex/>
            <div className="outlet">
                {props.children}
            </div>
        </div>
    )
}
export default Layout