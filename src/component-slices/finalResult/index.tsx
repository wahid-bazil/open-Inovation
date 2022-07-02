import SliceTitle from "../generalComponent/sliceTitle";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Istate, useAppDispatch} from "../../store";
import {useNavigate} from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import {getFinalResult} from "../../store/asyncThunks";
import JuryClassement from "./component/juryClassement";
import ProjectClassement from "./component/projectClassement";
import Layout from "../generalComponent/layout";

const FinalResult = () => {
    const list = [1, 2, 3, 4, 5, 6]
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    //const
    const title = localStorage.getItem("title")

    const isGetFinalResultPending = useSelector((state:Istate)=>state.general_Slice.getFinalResultPending)
    const isGetUserAccountPending = useSelector((state:Istate)=>state.general_Slice.getUserAccountPending)

    //effects
    useEffect(() => {
        if (title != "ADMIN") {
            localStorage.clear();
            navigate("/")
        }
    }, [])
    return (
        <div className="FinalResult">
            <Dialog
                open={isGetFinalResultPending || isGetUserAccountPending}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <CircularProgress style={{color: "#CF113F"}}/>
                </DialogContent>
            </Dialog>
            <Layout>
                <div className="top-side">
                    <ProjectClassement/>
                </div>
                /*<div className="bottom-side">
                    <JuryClassement/>
                </div>
                */
            </Layout>
        </div>
    )
}
export default FinalResult
