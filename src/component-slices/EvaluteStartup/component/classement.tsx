import useQuery from "../../../hooks/useQuery";
import {useEffect, useState} from "react";
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
    const setCurrentEdit = (event: MouseEvent) => {
        const id = Number(event.currentTarget.id)
        dispatch(General_Actions.setCurrentProjectToEdit(id))
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
                <div className="action">
                    <span>Action</span>
                </div>
            </div>
            <div className="content">
                {projects.map((project, index) =>
                    <div className={project.id === currentEdit ? "projectResult active" : "projectResult"}>
                        <div className="projectName">
                            <span>{project.label}</span>
                        </div>
                        <div className="note">
                            <span>{project.score}</span>
                        </div>
                        <div className="ranking">
                            <span>{index + 1}</span>
                        </div>
                        <div className="action">
                            <button onClick={setCurrentEdit} id={project.id.toString()}
                                    className={project.scored  ? "evaluted" : ""}>
                                <span>{project.scored ? "Edit" : "Evalute"}</span>
                            </button>
                        </div>

                    </div>
                )}
                {step === "evalute" ? <div className="submit">
                    <button>
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