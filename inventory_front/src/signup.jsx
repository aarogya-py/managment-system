import Login from "./login";
import { Link } from "react-router-dom";
function Signup(){
    return(
        <>
        <div>
            <div>
                <div>
                    <h1>Karobar</h1>
                </div>
                <div>
                    <input type="text" placeholder="Email*"  required/>
                </div>
                <div>
                    <input type="text" placeholder="USername*" required/>
                </div>
                <div>
                    <input type="text" placeholder="Password*" required/>
                </div>
                <div>
                    <input type="text" placeholder="Confirm Password*" required />
                </div>
                <div>
                    <button>Submit</button>
                </div>
                <div>
                    <Link to={"/"}>Create An Account?</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Signup;