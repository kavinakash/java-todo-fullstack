import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent(){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[showSuccessMessage, setShowSuccessMessage] = useState(false);
    const[showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    function handleUserChange(event){
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(){
        if(username==="administrator" && password==="admin"){
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            
            navigate(`/welcome/ ${username}`);
        }else{
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="login">
            {showSuccessMessage && <div className='successMessage'>Authentication successful</div>}
            {showErrorMessage && <div className='errorMessage'>Authentication failed. Please verify the credentials</div>}
            
            <div className="loginForm">
                <div>
                    <label>User name: </label>
                    <input type="text" name="username" value={username} onChange={handleUserChange}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}


