import {useNavigate} from "react-router-dom";
import Layout from "../generalComponent/layout";

const HomeIndex = () => {
    const navigate = useNavigate();

    //actios
    const MoveTo = (url: string) => {
        navigate(url)
    }
    return (
        <Layout>
            <div className="HomeIndex">
                <div className="title">
                    Here you can start your Evaluation
                    <br/>or see your Overall
                </div>
                <div className="actions">
                    <button onClick={() => MoveTo("/evalute/evaluteProject")} className="evalute">
                    <span>
                        Overall summary
                    </span>
                    </button>
                    <button onClick={() => MoveTo("/evalute/evaluteProject?step=evalute")} className="summary">
                    <span>
                       Evaluate
                    </span>
                    </button>
                </div>
            </div>
        </Layout>
    )
}
export default HomeIndex