import {BiChevronRight} from "react-icons/bi";

const SliceTitle: React.FC<{ title: string }> = (props) => {
    return (
        <div className="SliceTitle">
            <i><BiChevronRight/></i>
            <div className="vl"/>
            <span>{props.title} </span>
        </div>
    )
}
export default SliceTitle