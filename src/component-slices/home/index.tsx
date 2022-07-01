import {useNavigate} from "react-router-dom";
import Layout from "../generalComponent/layout";
import {useSelector} from "react-redux";
import {Istate} from "../../store";

const HomeIndex = () => {
    const navigate = useNavigate();

    const  isSubmitDone =localStorage.getItem("submit")


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
                    {isSubmitDone==="done" ? null
                        :
                        <button onClick={() => MoveTo("/evalute/evaluteProject?step=evalute")} className="summary">
                    <span>
                     Evaluate
                    </span>
                        </button>
                    }

                </div>
            </div>
        </Layout>
    )
}
export default HomeIndex