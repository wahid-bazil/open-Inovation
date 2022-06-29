import TableNote from "./component/tableNote";
import Classement from "./component/classement";
import HeaderIndex from "../header";
import SliceTitle from "../generalComponent/sliceTitle";
import {useSelector} from "react-redux";
import {Istate} from "../../store";

const EvaluteStartupIndex = () => {

    return (
        <div className="EvaluteStartupIndex">
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
            <div className="bottom-side">
                <Classement/>
            </div>
        </div>
    )
}
export default EvaluteStartupIndex