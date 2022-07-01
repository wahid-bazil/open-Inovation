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
                    Here you can start your evaluation
                    <br/> or see your summary

                </div>
                <div className="actions">
                    <button onClick={() => MoveTo("/evalute/evaluteProject")} className="evalute">
                    <span>
                        Summary
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