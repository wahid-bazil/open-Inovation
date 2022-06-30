import useQuery from "../../../hooks/useQuery";
import React, {useEffect, useState} from "react";
import {getIndivClassement} from "../../../store/asyncThunks";
import {Istate, useAppDispatch} from "../../../store";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {General_Actions} from "../../../store/generalSlice";
import {MouseEvent} from "react"

const Classement = () => {


    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    let query = useQuery();
    const step = query.get('step')

    //const
    const userId = localStorage.getItem("userId")
    const title = localStorage.getItem("title")

    //states
    const projects = useSelector((state: Istate) => state.general_Slice.projects)
    const currentEdit = useSelector((state: Istate) => state.general_Slice.currentProjecToEdit)


    //effects
    useEffect(() => {
        if (true) {
            dispatch(getIndivClassement(Number(userId))).unwrap()
        } else {
            navigate("/auth")
        }
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


    return (
        <div className="Classement">
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
                    <span>Action</span>
                </div>
            </div>
            <div className="content">
                {projects.map((project, index) =>
                    <div id={project.id.toString()}
                         className={project.id === currentEdit ? "projectResult active" : "projectResult"}>
                        <div className="projectName">
                            <span>{project.label}</span>
                        </div>
                        <div className="note">
                            <span>{project.score} %</span>
                        </div>
                        <div className="ranking">
                            <span>{project.scored ? index + 1 : "-"}</span>
                        </div>
                        <div className={title === "ADMIN" ? "d-none" : "action"}>
                            <button title={project.label} onClick={(e) => setCurrentEdit(e, project.scored)}
                                    id={project.id.toString()}
                                    className={project.scored ? "evaluted" : ""}>
                                <span>{project.scored ? "Edit" : "Evalute"}</span>
                            </button>
                        </div>

                    </div>
                )}
                {step === "evalute" ? <div className="submit">
                    <button className={isDisabled()}>
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