import TableNote from "./component/tableNote";
import Classement from "./component/classement";
import HeaderIndex from "../header";
import SliceTitle from "../generalComponent/sliceTitle";
import {useSelector} from "react-redux";
import {Istate, useAppDispatch} from "../../store";
import useQuery from "../../hooks/useQuery";
import React, {useEffect, useRef, useState} from "react";
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





    //state
    const role = useSelector((state: Istate) => state.general_Slice.userCategory)
    const getEvalutionsPending = useSelector((state: Istate) => state.general_Slice.getEvalutionsPending)
    const getIndivClassementPending = useSelector((state: Istate) => state.general_Slice.getIndivClassementPending)
    const isEvalutionsSaving = useSelector((state: Istate) => state.general_Slice.isEvalutionsSaving)
    const currentProjectTiltle = useSelector((state: Istate) => state.general_Slice.currentProjectTitle)

    //refs
    const classementRef = useRef<HTMLDivElement>(null);
    const executeScroll = () => {
        console.log(classementRef.current,"classementRef.current")
        classementRef.current?.scrollIntoView()
    }


    //effects
    useEffect(() => {
        if (role === "admin") {
            localStorage.clear();
            navigate("/")
        }
        window.scrollTo(0, 0)
    }, [role])

    //actions


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
                {step === "evalute" ?
                    <div className="top-side">
                        <SliceTitle title={currentProjectTiltle}/>
                        <TableNote executeScroll={executeScroll}/>
                    </div>
                    : null}
                <div className="bottom-side">
                    <Classement ref={classementRef}/>
                </div>
            </div>
        </Layout>
    )
}
export default EvaluteStartupIndex