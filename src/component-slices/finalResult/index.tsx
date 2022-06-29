import SliceTitle from "../generalComponent/sliceTitle";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Istate} from "../../store";
import {useNavigate} from "react-router-dom";

const FinalResult = () => {
    const list = [1, 2, 3, 4, 5, 6]
    const navigate = useNavigate();

    //state
    const role = useSelector((state: Istate) => state.general_Slice.userCategory)

    //effects
    useEffect(() => {
        if (role!="admin"){
            localStorage.clear();
            navigate("/auth")
        }
        else{

        }
    }, [])
    return (
        <div className="FinalResult">
            <div>
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
                        {list.map((value, index) =>
                                <div className="projectResult">
                                    <div className="projectName">
                        <span>
                            Selfdrvn Enterprise
                        </span>
                                    </div>
                                    <div className="finalScore">
                       <span>
                            8/10
                       </span>
                                    </div>
                                    <div className="ranking">
                        <span>
                            1
                        </span>
                                    </div>
                                </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FinalResult