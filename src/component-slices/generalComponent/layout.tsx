import HeaderIndex from "../header";

import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Layout: React.FC<any> = (props) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("userId")) {
            navigate("/login")
        }
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