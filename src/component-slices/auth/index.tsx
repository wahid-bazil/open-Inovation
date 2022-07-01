import {AiTwotoneHeart} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {FormEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../../store";
import {getUser} from "../../store/asyncThunks";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

const AuthIndex = () => {

    const navigate = useNavigate();
    const moveTo = () => {
        navigate("/evalute/evaluteProject")
    }

    const dispatch = useAppDispatch()

    //consts

    const errMsg = "your credentials are not valid"

    //states
    const [isPending, setPending] = useState<boolean>(false)
    const [isFailed, setFailed] = useState<boolean>(false)
    const [userLogIn, setUserLogIn] = useState<{ username: string, password: string }>({username: "", password: ""})


    //effect
    useEffect(()=>{
        localStorage.clear()
    },[])


    //actions
    const handlChange = (event: FormEvent<HTMLInputElement>) => {
        setUserLogIn({
            ...userLogIn,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const logIn = (event:any) => {
        event.preventDefault();
        setPending(true)
        dispatch(getUser(userLogIn)).unwrap()
            .then((res) => {
                setPending(false)
                if(res.title==="ADMIN"){
                    navigate("/evalute/result")
                }
                else if (res.finalSubmission){
                    navigate("/evalute/evaluteProject")
                }
                else{
                    navigate("/evalute")
                }
            })
            .catch(() => {
                setPending(false)
                setFailed(true)
            })
    }

    const closeDialog = () => {
        setFailed(false)
        setPending(false)
    }
    return (
        <div className="AuthIndex">
            <Dialog
                open={isPending || isFailed}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    {isPending ? <CircularProgress style={{color: "#CF113F"}}/> :
                        <DialogContentText id="alert-dialog-description">
                            <span className="err">{errMsg}</span>
                        </DialogContentText>
                    }
                </DialogContent>
                {isFailed ?
                    <DialogActions>
                        <button className="auth" onClick={closeDialog}>Close</button>
                    </DialogActions>
                    :
                    null
                }

            </Dialog>
            <div className="backGround">
                <div
                    className="header-logo">
                    <img
                        className="ram"
                        src={window.location.origin + "/assets/images/M5-logo.png"}
                        alt={""}
                    />
                    <img className="m5" src={window.location.origin + "/assets/images/ram-logo.png"} alt={""}/>
                </div>
            </div>
            <div className="content">
                <div className="title">
                    RAM open innovation
                </div>
                <form>
                    <input name={"username"} onChange={handlChange} value={userLogIn.username} placeholder={"Username"}/>
                    <input type={"password"} name={"password"} onChange={handlChange} value={userLogIn.password}
                           placeholder={"Password"}/>
                    <button onClick={logIn} type="submit">Log in</button>
                </form>
                <div className="footer">
                    <span>Created with</span><i><AiTwotoneHeart/></i><span> by RAM digital factory</span>
                </div>
            </div>
        </div>
    )
}
export default AuthIndex