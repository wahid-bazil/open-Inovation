import {useNavigate} from "react-router-dom";

const HomeIndex = () => {
    const navigate = useNavigate();

    //actios
    const MoveTo = (url: string) => {
        navigate(url)
    }
    return (
        <div className="HomeIndex">
            <div className="title">
                Here you can start your Evaluation
                <br/>or see your Overall
            </div>
            <div className="actions">
                <button onClick={()=>MoveTo("/evalute/evaluteProject")} className="evalute">
                    <span>
                        Overall summary
                    </span>
                </button>
                <button  onClick={()=>MoveTo("/evalute/evaluteProject?step=evalute")} className="summary">
                    <span>
                       Evaluate
                    </span>
                </button>
            </div>
        </div>
    )
}
export default HomeIndex