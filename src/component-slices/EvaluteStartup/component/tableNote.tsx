import {Checkbox} from "@mui/material";

const TableNote = () => {
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
            <div className="value color-flow ">
                <div className="criteria-label">
                    <span>Business value</span>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="weight-value">
                   <span>
    30%
</span>
                </div>
            </div>
            <div className="value">
                <div className="criteria-label">
                    <span>Feasibility</span>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="weight-value">
<span>
    30%
</span>
                </div>
            </div>
            <div className="value color-flow">
                <div className="criteria-label">
                    <span>Team</span>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="note-value">
                    <Checkbox/>
                </div>
                <div className="weight-value">
<span>
    30%
</span>
                </div>
            </div>

        </div>
    )
}
export default TableNote