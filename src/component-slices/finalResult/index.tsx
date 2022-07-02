import SliceTitle from "../generalComponent/sliceTitle";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Istate, useAppDispatch} from "../../store";
import {useNavigate} from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import {getFinalResult, getUserAccount} from "../../store/asyncThunks";
import JuryClassement from "./component/juryClassement";
import ProjectClassement from "./component/projectClassement";
import Layout from "../generalComponent/layout";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const FinalResult = () => {
    const list = [1, 2, 3, 4, 5, 6]
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    //const
    const title = localStorage.getItem("title")

    const isGetFinalResultPending = useSelector((state:Istate)=>state.general_Slice.getFinalResultPending)
    const isGetUserAccountPending = useSelector((state:Istate)=>state.general_Slice.getUserAccountPending)
    
    const currentGroup = useSelector((state: Istate) => state.general_Slice.currentGroup)

    const [groupe,setGroup]=useState("g1")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGroup((event.target as HTMLInputElement).value);
    };


    //effects
    useEffect(() => {
        if (title != "ADMIN") {
            localStorage.clear();
            navigate("/")
        }
        dispatch(getFinalResult(groupe))
        dispatch(getUserAccount(groupe))
    }, [groupe])

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
                 <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label" style={{color: "#CF113F"}}>Jury group</FormLabel>
                <RadioGroup
                    onChange={handleChange}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={groupe}
                >
                    <FormControlLabel value="g1" control={<Radio style={{color: "#CF113F"}} />} label="Jury 1" />
                    <FormControlLabel value="g2" control={<Radio style={{color: "#CF113F"}} />} label="Jury 2" />
                </RadioGroup>
            </FormControl>

                <div className="top-side">
                    <ProjectClassement/>
                </div>
                <div className="bottom-side">
                    <JuryClassement/>
                </div>
            </Layout>
        </div>
    )
}
export default FinalResult
