import TableNote from "./component/tableNote";
import Classement from "./component/classement";
import HeaderIndex from "../header";
import SliceTitle from "../generalComponent/sliceTitle";
import {useSelector} from "react-redux";
import {Istate, useAppDispatch} from "../../store";
import useQuery from "../../hooks/useQuery";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Layout from "../generalComponent/layout";

const EvaluteStartupIndex = () => {

    let query = useQuery();
    const step = query.get('step')
    const dispatch = useAppDispatch()

    const navigate = useNavigate();

    //const
    const msg = ""

    //state
    const role = useSelector((state: Istate) => state.general_Slice.userCategory)
    const getEvalutionsPending = useSelector((state: Istate) => state.general_Slice.getEvalutionsPending)
    const getIndivClassementPending = useSelector((state: Istate) => state.general_Slice.getIndivClassementPending)
    const isEvalutionsSaving = useSelector((state: Istate) => state.general_Slice.isEvalutionsSaving)
    const currentProjectTiltle = useSelector((state: Istate) => state.general_Slice.currentProjectTitle)
    const [isDialogOpen , setDialogOpen] = useState(false)


    //effects
    useEffect(() => {
        if (role === "admin") {
            localStorage.clear();
            navigate("/")
        }
        window.scrollTo(0, 0)
    }, [role])

    //actions
    const sumbit = ()=>{

    }

    return (
        <Layout>
            <div className="EvaluteStartupIndex">
                <Dialog
                    open={getEvalutionsPending || getIndivClassementPending || isEvalutionsSaving}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <CircularProgress style={{color: "#CF113F"}}/>
                    </DialogContent>
                </Dialog>
                <Dialog
                    open={isDialogOpen}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <span>{msg}</span>
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <button onClick={()=>setDialogOpen(false)}>Close</button>
                    </DialogActions>

                </Dialog>
                {step === "evalute" ?
                    <div className="top-side">
                        <SliceTitle title={currentProjectTiltle}/>
                        <TableNote/>
                    </div>
                    : null}
                <div className="bottom-side">
                    <Classement/>
                </div>
            </div>
        </Layout>
    )
}
export default EvaluteStartupIndex