const Classement = () => {
    const list = [1, 2, 3, 4,5,6]
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
                {list.map((value, index) =>
                    <div className="projectResult">
                        <div className="projectName">
                           <span>Selfdrvn Enterprise</span>
                        </div>
                        <div className="note">
                           <span>8/10</span>
                        </div>
                        <div className="ranking">
                            <span>3</span>
                        </div>
                        <div className="action">
                            <button>
                                <span>Evaluate</span>
                            </button>
                        </div>

                    </div>
                )}
                <div className="submit">
                    <button>
                        <span>
                            Submission
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Classement