import SliceTitle from "../generalComponent/sliceTitle";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Istate} from "../../store";
import {useNavigate} from "react-router-dom";
import Layout from "../generalComponent/layout";
import JuryClassement from "./component/juryClassement";
import ProjectClassement from "./component/projectClassement";

const FinalResult = () => {
    const list = [1, 2, 3, 4, 5, 6]
    const navigate = useNavigate();

    //const
    const title = localStorage.getItem("title")

    //effects
    useEffect(() => {
        if (title != "ADMIN") {
            localStorage.clear();
            navigate("/login")
        }
    }, [])
    return (
        <Layout>
            <div className="FinalResult">
                <div className="top-side">
                    <ProjectClassement/>
                </div>
                <div className="bottom-siide">
                    <JuryClassement/>
                </div>
            </div>
        </Layout>
    )
}
export default FinalResult