import SliceTitle from "../../generalComponent/sliceTitle";

const ProjectClassement = () => {
    const list = [1, 2, 3, 4, 5, 6]
    return (
        <div className="ProjectClassement">
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
export default ProjectClassement