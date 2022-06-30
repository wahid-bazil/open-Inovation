import HeaderIndex from "../header";
import { Outlet } from "react-router";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("userId") || !localStorage.getItem("title") || !localStorage.getItem("username")) {
            navigate("/auth")
        }
        /*  localStorage.setItem('userId', action.payload.id.toString());
      localStorage.setItem('title', action.payload.title.toString());
      localStorage.setItem('username', action.payload.username.toString());*/
    }, [])


    return (
        <div className="layout">
            <HeaderIndex/>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    )
}
export default Layout