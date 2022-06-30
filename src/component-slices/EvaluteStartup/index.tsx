import TableNote from "./component/tableNote";
import Classement from "./component/classement";
import HeaderIndex from "../header";
import SliceTitle from "../generalComponent/sliceTitle";
import {useSelector} from "react-redux";
import {Istate} from "../../store";
import useQuery from "../../hooks/useQuery";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

const EvaluteStartupIndex = () => {

    let query = useQuery();
    const step = query.get('step')

    const navigate = useNavigate();

    //state
    const role = useSelector((state: Istate) => state.general_Slice.userCategory)
    const getEvalutionsPending = useSelector((state: Istate) => state.general_Slice.getEvalutionsPending)
    const getIndivClassementPending = useSelector((state: Istate) => state.general_Slice.getIndivClassementPending)

    //effects
    useEffect(() => {
        if (role === "admin") {
            localStorage.clear();
            navigate("/auth")
        }
    }, [role])

    return (
        <div className="EvaluteStartupIndex">
            <Dialog
                open={getEvalutionsPending || getIndivClassementPending}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <CircularProgress style={{color: "#CF113F"}}/>
                </DialogContent>
            </Dialog>
            {step === "evalute" ?
                <div className="top-side">
                    <SliceTitle title={"Selfdrvn Enterprise"}/>
                    <TableNote/>
                </div>
                : null}
            <div className="bottom-side">
                <Classement/>
            </div>
        </div>
    )
}
export default EvaluteStartupIndex