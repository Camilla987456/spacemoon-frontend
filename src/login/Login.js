import "./Login.css"
import * as PropTypes from "prop-types";
import {useState} from "react";

function LoginForm({onClose}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userInputIsWrong, setUserInputIsWrong] = useState(false)
    const [passInputIsWrong, setPassInputIsWrong] = useState(false)
    const tryToLogin = () => {
        validateUser();
        validatePassword();
        function validateUser() {
            if (username.trim() === "") {
                setUserInputIsWrong(true)
            } else {
                setUserInputIsWrong(false)
            }
        }
        function validatePassword() {
            if (password.trim() === "") {
                setPassInputIsWrong(true)
            } else {
                setPassInputIsWrong(false)
            }
        }
    }

    return (
        <div className="LoginModal">
            <form>
                <button type="button" className="CloseButton" onClick={onClose}>X</button>
                <label htmlFor="UserName">User Name: </label>
                <input value={username} type="text" name="UserName" id="UserName" placeholder="Your Username"
                       onChange={(event)=>{setUsername(event.target.value)}} className={userInputIsWrong?"WrongInput":""}/>
                <label htmlFor="Password">Password: </label>
                <input type="password" name="Password" id="Password" placeholder="*****"
                       onChange={(event)=>{setPassword(event.target.value)}} className={passInputIsWrong?"WrongInput":""}/>
                <button type="button" className="Button LoginSendButton" onClick={tryToLogin}>Login</button>
            </form>
        </div>
    );
}

export function Login({shown, closeFunction}) {
    return (
        <>{shown ? <LoginForm onClose={closeFunction}/> : <></>}</>
    );
}

Login.propTypes = {shown: PropTypes.bool};