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

    const finalClassement = useSelector((state: Istate) => state.general_Slice.finalClassemet)
    const getFinalResultPending = useSelector((state: Istate) => state.general_Slice.getFinalResultPending)

    //effects
    useEffect(() => {
        if (title != "ADMIN") {
            localStorage.clear();
            navigate("/login")
        } else {
            dispatch(getFinalResult()).unwrap()
        }
    }, [])
    return (
        <div className="FinalResult">
            {/*           <Dialog
                open={getFinalResultPending}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <CircularProgress style={{color: "#CF113F"}}/>
                </DialogContent>
            </Dialog>*/}
            {/*    <div>
                <SliceTitle title={"Overall summary"}/>
                <div className="table">
                    <div className="titles">
                        <div/>
                        <div>
                            <span>
                                Final score
                            </span>
                        </div>
                        <div>
                            <span>
                                Ranking
                            </span>
                        </div>
                    </div>
                    <div className="content">
                        {finalClassement.map((project, index) =>
                                <div className="projectResult">
                                    <div className="projectName">
                        <span>
                            {project.label}
                        </span>
                                    </div>
                                    <div className="finalScore">
                       <span>
                           {parseFloat(project.score.toString()).toFixed(2)} %
                       </span>
                                    </div>
                                    <div className="ranking">
                        <span>
                            {index + 1}
                        </span>
                                    </div>
                                </div>
                        )}
                    </div>
                </div>
            </div>*/}
            <Layout>
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