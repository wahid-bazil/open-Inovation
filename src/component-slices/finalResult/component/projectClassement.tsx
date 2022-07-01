import SliceTitle from "../../generalComponent/sliceTitle";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {Istate, useAppDispatch} from "../../../store";
import {getFinalResult} from "../../../store/asyncThunks";

const ProjectClassement = () => {
    const list = [1, 2, 3, 4, 5, 6]
    const dispatch = useAppDispatch()

    const finalClassemet = useSelector((state: Istate) => state.general_Slice.finalClassemet)

    //effects
    useEffect(() => {
        dispatch(getFinalResult())
    }, [])

    return (
        <div className="ProjectClassement">
            <div>
                <SliceTitle title={"Team Ranking"}/>
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
                        {finalClassemet.map((project, index) =>
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
            </div>
        </div>


    )
}
export default ProjectClassement