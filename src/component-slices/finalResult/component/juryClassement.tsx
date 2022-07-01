import SliceTitle from "../../generalComponent/sliceTitle";
import {useSelector} from "react-redux";
import {Istate, useAppDispatch} from "../../../store";
import {useEffect} from "react";
import {getFinalResult, getUserAccount} from "../../../store/asyncThunks";

const JuryTable = () => {
    const list = [1, 2, 3, 4, 5, 6, 7]

    const dispatch = useAppDispatch()

    const userAccount = useSelector((state: Istate) => state.general_Slice.userAccount)

    useEffect(() => {
        dispatch(getUserAccount())
    }, [])

    return (
        <div className="juryClassement">
            <SliceTitle title={"JURY MEMBERS STATE"}/>
            <div className="titles">
                <div className="juryList">
                    <span>List member jury</span>
                </div>
                <div>
                    <span>Final submission</span>
                </div>
                <div className="date/time">
                    <span>date/Time</span>
                </div>
            </div>
            {userAccount.map(account => (
                <div className="value">
                    <div className="juryList">
                        <span>
                           {account.firstName + " " + account.lastName}
                        </span>
                    </div>
                    <div className="finalSubmission">
 <span>
                           {account.finalSubmisson ? "yes" : "No"}
                        </span>
                    </div>
                    <div className="date/time">
                        <span>
                            {account.finalSubmissonDate}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default JuryTable