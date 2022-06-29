import {BiChevronRight} from 'react-icons/bi';
import SelectS from "./component/select";

const StartupListIndex = () => {
    return (
        <div className="StartupListIndex">
            <div className="title">
                <i><BiChevronRight/></i>
                <div className="vl"/>
                <span>Startup / Projet </span>
            </div>
            <SelectS/>
            <div className="action">
                <button className="evalute"> Evalute</button>
            </div>
        </div>
    )
}
export default StartupListIndex