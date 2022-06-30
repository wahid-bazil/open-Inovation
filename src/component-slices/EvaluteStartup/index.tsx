import TableNote from "./component/tableNote";
import Classement from "./component/classement";
import HeaderIndex from "../header";
import SliceTitle from "../generalComponent/sliceTitle";
import {useSelector} from "react-redux";
import {Istate} from "../../store";
import useQuery from "../../hooks/useQuery";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const EvaluteStartupIndex = () => {

    let query = useQuery();
    const step = query.get('step')

    const navigate = useNavigate();

    //state
    const role = useSelector((state: Istate) => state.general_Slice.userCategory)

    //effects
    useEffect(() => {
        if (role === "admin") {
            localStorage.clear();
            navigate("/auth")
        }
    }, [role])

    return (
        <div className="EvaluteStartupIndex">
            {step === "evalute" ?
                <div className="top-side">
                    <SliceTitle title={"Selfdrvn Enterprise"}/>
                    <TableNote/>
                    <div className="save">
                        <button>
                            <span>
                                Save
                            </span>
                        </button>
                    </div>
                </div>
                : null}
            <div className="bottom-side">
                <Classement/>
            </div>
        </div>
    )
}
export default EvaluteStartupIndex