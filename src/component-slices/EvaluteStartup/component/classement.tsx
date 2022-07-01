import useQuery from "../../../hooks/useQuery";
import React, {useEffect, useState} from "react";
import {getIndivClassement, postSumbit} from "../../../store/asyncThunks";
import {Istate, useAppDispatch} from "../../../store";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {General_Actions} from "../../../store/generalSlice";
import {MouseEvent} from "react"
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Checkbox} from "@mui/material";

const Classement: React.FC<{ ref: any }> = (props) => {


    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    let query = useQuery();
    const step = query.get('step')

    //const
    const userId = localStorage.getItem("userId")
    const title = localStorage.getItem("title")
    const isDone = localStorage.getItem("submit")

    //states
    const projects = useSelector((state: Istate) => state.general_Slice.projects)
    const currentEdit = useSelector((state: Istate) => state.general_Slice.currentProjecToEdit)
    const [isDialogOpen, setIsDialogOpen] = useState(false)


    //const
    const msg = "Your assessment was successfully completed."


    //effects
    useEffect(() => {
        dispatch(getIndivClassement(Number(userId))).unwrap()

    }, [])

    //actions
    const setCurrentEdit = (e: any, status: boolean) => {
        const id = Number(e.currentTarget.id)
        dispatch(General_Actions.setCurrentProjectToEdit({id, status: status, title: e.currentTarget.title}))
        window.scrollTo(0, 0)
        if (step != "evalute") {
            navigate("/evalute/evaluteProject?step=evalute")
        }
    }

    const isDisabled = () => {
        if (isDone === "done") {
            return "invisible"
        }
        let index = 0
        while (index < projects.length) {
            if (!projects[index].scored) {
                break;
            } else {
                index++
            }
        }
        if (index === projects.length) {
            return ""
        } else {
            return "disabled"
        }
    }

    const submit = () => {
        dispatch(postSumbit(Number(userId))).unwrap()
            .then(() => {
                dispatch(General_Actions.setIsSubmit(true))
                setIsDialogOpen(false)
                localStorage.setItem('submit', "done");
                navigate("/evalute/evaluteProject")
            })
    }
    const getClasse = (project: any) => {
        if (isDone === "done") {
            return "invisible"
        } else {
            if (project.scored) {
                return "evaluted"
            } else {
                return ""
            }
        }
    }


    return (
        <div ref={props.ref} className="Classement">
            <Dialog
                open={isDialogOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <span className="warning">{msg}</span>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <button className="submit" onClick={submit}>Confirm</button>
                </DialogActions>

            </Dialog>
            <div className="titles">
                <div className="projectName">
                    <span>
                        Team
                    </span>
                </div>
                <div className="note">
                    <span>Score</span>
                </div>
                <div className="ranking">
                    <span>Ranking</span>
                </div>
                <div className={title === "ADMIN" ? "d-none" : "action"}>
                    <span>{isDone === "done" ? "Final Submission" : "Action"}</span>
                </div>
            </div>
            <div className="content">
                {projects.map((project, index) =>
                    <div id={project.id.toString()}
                         className={project.id === currentEdit ? "projectResult active" : "projectResult"}>
                        <div className="projectName">
                            <span className="projectName">{project.label}</span>
                        </div>
                        <div className="note">
                            <span>{parseFloat(project.score.toString()).toFixed(2)} %</span>
                        </div>
                        <div className="ranking">
                            <span>{project.scored ? index + 1 : "-"}</span>
                        </div>
                        <div className={title === "ADMIN" ? "d-none" : "action"}>
                            {isDone === "done" ?
                                <Checkbox checked={true}/>
                                : <button title={project.label} onClick={(e) => setCurrentEdit(e, project.scored)}
                                          id={project.id.toString()}
                                          className={getClasse(project)}>
                                    <span>{project.scored ? "Edit" : "Evalute"}</span>
                                </button>}
                        </div>

                    </div>
                )}
                {step === "evalute" ? <div className="submit">
                    <button onClick={() => setIsDialogOpen(true)} className={isDisabled()}>
                        <span>
                            Submission
                        </span>
                    </button>
                </div> : null}
            </div>
        </div>
    )
}
export default Classement