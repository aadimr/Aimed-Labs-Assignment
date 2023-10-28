import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { StyledButton } from "../components/Button";
import { Input, StyledInput } from "../components/Input";
import { Form } from "../components/LoginPageStyle";
import MyImage from '../Image.png';

function LogIn() {

    const [showAndHide, setShowAndHide] = useState(false)

    function showAndHidePswd() {
        setShowAndHide(!showAndHide)
    }

    return (
        <Form>
            <img src={MyImage} alt="error" />
            <div className="Section1" >
                <div className="wrapper">
                    <div>
                        <h2>Login</h2>
                        <div>
                            <p className="email">Email:</p>
                            <Input placeholder="Enter Email" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <div className="innerSection1">
                                <StyledInput type={showAndHide ? "text" : "password"} placeholder="Enter Password" />
                                <p onClick={showAndHidePswd}>
                                    {showAndHide ? <AiFillEye className="eyeIcon" /> : <AiFillEyeInvisible className="eyeIcon" />}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="innerSection2">
                                <div><input type="checkbox" /> Remember Me</div>
                                <span className="changePass">Change password</span>
                            </div>
                            <div><input type="checkbox" /> Agree to <span>Terms & Conditions</span></div>
                        </div>
                        <div className="innerSection3">
                            <StyledButton>Submit</StyledButton>
                            <p>Don't have an account?<span>Register Here</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default LogIn;
