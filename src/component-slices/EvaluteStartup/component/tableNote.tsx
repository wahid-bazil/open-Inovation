import {Checkbox} from "@mui/material";
import {useSelector} from "react-redux";
import {Istate, useAppDispatch} from "../../../store";
import {useEffect, useState} from "react";
import {getCriteria, getEvalutions} from "../../../store/asyncThunks";
import {useNavigate} from "react-router-dom";
import {evalution} from "../../../type";
import {MouseEvent} from "react";

let isInitial = true
const TableNote = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //consts
    const userId = localStorage.getItem("userId")

    //states
    const [evalutions, setEvalutions] = useState<evalution[]>([])
    const currentProjecToEdit = useSelector((state: Istate) => state.general_Slice.currentProjecToEdit)

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
            navigate("/auth")
        }

    }, [currentProjecToEdit])

    //actions
    const handlChangeNote = (event: React.ChangeEvent<HTMLInputElement>) => {
        let evalutionCopy = [...evalutions]
        // @ts-ignore
        evalutionCopy.find(element => element.criteria.label === event.currentTarget.name).note = Number(event.currentTarget.value)
        setEvalutions(evalutionCopy)


    }


    return (
        <div className="TableNote">
            <div className="titles">
                <div className="criteria">
                    <span>
                        to hide
                    </span>
                </div>
                <div className="note">
                    <span>
                        0
                    </span>
                </div>
                <div className="note">
                     <span>
                        1
                    </span>
                </div>
                <div className="note">
                     <span>
                        2
                    </span>
                </div>
                <div className="note">
                      <span>
                        3
                    </span>
                </div>
                <div className="weight">
                <span>
                    Weight
                </span>
                </div>
            </div>
            {evalutions.map((evalution, index) => (
                <div className={(index + 1 % 2 === 0 ? "value " : "value color-flow")}>
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
                        {evalution.criteria.weight}
                    </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TableNote