import { Link } from "react-router-dom";
import { } from "react"
import Signup from "./signup";
function Login(){
// const [loginData,setloginData]=useState([
//     username="",  
//     password="",
// ]);
// const log =async () => {
    
//     try{
//         const GetLoginData=await fetch(localll,{
//             method:"POST",
//             headers:{
//                 "Content-type":"application/json",
//             },
//             body: JSON.stringify(data)
//         }) 
//         .then(response=>{
//             if(response){
//                 console("user Valid")
//             }
//             else{
//                 console("user invalid")
//             }    
//         })
// }
//     catch (error){
//         console.log("api didnt fetched",error)
//         }
//     }
function handelsubmit(){

}

    return(
        <>
        <div>
            <div className="bg-white">
                <h1>Karobar</h1>
                <div>
                    <input type="text" placeholder= "Username"/>
                </div>
                <div>
                    <input type="text" placeholder="Password" />
                </div>
                <div>
                    <button onClick={handelsubmit}>
                        Login
                    </button>
                </div>
                <div>
                    <Link to={'/signup'}>Already Has An Account?</Link>
                </div>
            </div>
        </div>
        </>

    )
} 
export default Login;