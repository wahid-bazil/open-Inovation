import SliceTitle from "../../generalComponent/sliceTitle";

const JuryTable = () => {
    const list = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div className="juryClassement">
            <SliceTitle title={"Jury members state"}/>
            <div className="titles">
                <div className="juryList">
                    <span>List member jury</span>
                </div>
                <div className="date/time">
                    <span>date/Time</span>
                </div>
                <div>
                    <span>Final submission</span>
                </div>
            </div>
            {list.map(element => (
                <div className="value">
                    <div className="juryList">
                        <span>
                            Lorem ipsum
                        </span>
                    </div>
                    <div className="date/time">
                        <span>
                            Lorem ipsum
                        </span>
                    </div>
                    <div className="finalSubmission">
 <span>
                            Lorem ipsum
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default JuryTable