import HeaderIndex from "../header";
import { Outlet } from "react-router";
import {useEffect} from "react";

const Layout = () => {
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