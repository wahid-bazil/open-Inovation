import {Checkbox} from "@mui/material";
import {useSelector} from "react-redux";
import {Istate, useAppDispatch} from "../../../store";
import {useEffect, useState} from "react";
import {
    editEvalutions,
    getCriteria,
    getEvalutions,
    getIndivClassement,
    postEvalutions
} from "../../../store/asyncThunks";
import {useNavigate} from "react-router-dom";
import {evalution} from "../../../type";
import {MouseEvent} from "react";
import {General_Actions} from "../../../store/generalSlice";


let isInitial = true
const TableNote = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //consts
    const userId = localStorage.getItem("userId")

    //states
    const [evalutions, setEvalutions] = useState<evalution[]>([])
    const currentProjecToEdit = useSelector((state: Istate) => state.general_Slice.currentProjecToEdit)
    const isCurrentProjectEvaluted = useSelector((state: Istate) => state.general_Slice.isCurrentProjectEvaluted)

    //effects
    useEffect(() => {
        if (isInitial) {
            isInitial = false
            return
        }
        if (true) {
            if (currentProjecToEdit) {
                dispatch(getEvalutions({userId: Number(userId), projectId: currentProjecToEdit})).unwrap()
                    .then((res) => {
                        setEvalutions(res)
                    })
            }
        } else {
            navigate("/")
        }

    }, [currentProjecToEdit])

    //actions
    const handlChangeNote = (event: React.ChangeEvent<HTMLInputElement>) => {
        let evalutionCopy = [...evalutions]
        // @ts-ignore
        evalutionCopy.find(element => element.criteria.label === event.currentTarget.name).note = Number(event.currentTarget.value)
        setEvalutions(evalutionCopy)
    }
    const save = () => {
        if (isCurrentProjectEvaluted) {
            dispatch(editEvalutions(evalutions)).unwrap()
                .then(() => {
                    dispatch(getIndivClassement(Number(userId))).unwrap()
                })
        } else {
            dispatch(postEvalutions(evalutions)).unwrap()
                .then((res) => {
                    setEvalutions(res)
                    dispatch(General_Actions.switchCurrentProjectStatus(true))
                    dispatch(getIndivClassement(Number(userId))).unwrap()

                })
        }
    }

    //function
    const isDisabled = () => {
        let index = 0
        while (index < evalutions.length) {
            if (evalutions[index].note === null) {
                break;
            } else {
                index++
            }
        }
        if (index === evalutions.length) {
            return ""
        } else {
            return "disabled"
        }
    }


    return (
        <div id={"table"} className="TableNote">
            <div className="titles">
                <div className="criteria">
                    <span>
                        to hide
                    </span>
                </div>
                <div className="note">
                    <span>
                        0 - NA
                    </span>
                </div>
                <div className="note">
                     <span>
                        1 - POUR
                    </span>
                </div>
                <div className="note">
                     <span>
                        2 - FAIR
                    </span>
                </div>
                <div className="note">
                      <span>
                        3 - EXCELENT
                    </span>
                </div>
                <div className="weight">
                <span>
                    Weight
                </span>
                </div>
            </div>
            {evalutions.map((evalution, index) => (
                <div  className={(index + 1 % 2 === 0 ? "value " : "value color-flow")}>
                    <div className="criteria-label">
                        <span>{evalution.criteria.label}</span>
                    </div>
                    <div className="note-value">
                        <Checkbox value={0} onChange={handlChangeNote} name={evalution.criteria.label}
                                  checked={evalution.note === 0}/>
                    </div>
                    <div className="note-value">
                        <Checkbox value={1} onChange={handlChangeNote} name={evalution.criteria.label}
                                  checked={evalution.note === 1}/>
                    </div>
                    <div className="note-value">
                        <Checkbox value={2} onChange={handlChangeNote} name={evalution.criteria.label}
                                  checked={evalution.note === 2}/>
                    </div>
                    <div className="note-value">
                        <Checkbox value={3} onChange={handlChangeNote} name={evalution.criteria.label}
                                  checked={evalution.note === 3}/>
                    </div>
                    <div className="weight-value">
                   <span>
                        {evalution.criteria.weight}%
                    </span>
                    </div>
                </div>
            ))}
            <div className="save">
                <button onClick={save} className={isDisabled()}>
                            <span>
                                Save
                            </span>
                </button>
            </div>
        </div>
    )
}
export default TableNote