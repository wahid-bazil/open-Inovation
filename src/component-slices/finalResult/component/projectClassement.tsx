import SliceTitle from "../../generalComponent/sliceTitle";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Istate, useAppDispatch} from "../../../store";
import {getFinalResult} from "../../../store/asyncThunks";

const ProjectClassement = () => {

    const dispatch = useAppDispatch()

    const finalClassemet = useSelector((state: Istate) => state.general_Slice.finalClassemet)
    const currentGroup = useSelector((state: Istate) => state.general_Slice.currentGroup)

    const [groupe,setGroup]=useState("g1")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGroup((event.target as HTMLInputElement).value);
    };

    //effects
    useEffect(() => {
        dispatch(getFinalResult(groupe))
    }, [groupe])

    return (
        <div className="ProjectClassement">
            <div>
                <SliceTitle title={"TEAM RANKING"}/>
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
