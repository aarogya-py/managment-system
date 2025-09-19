import { useState } from "react";
import { Link } from "react-router-dom";
import { } from "react"
import Signup from "./signup";
function Login(){
const [loginData,setloginData]=useState({
    username:"",  
    password:"",
});
const handelChange=(e)=>{
    setloginData({...loginData,[e.target.name]:e.target.value});

};
const log =async () => {
    
    try{
        const GetLoginData=await fetch("http://127.0.0.1:8000/controls/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify(loginData)
        }) 
        .then(response=>{
            if(response){
                console.log(loginData)
            }
            else{
                console.log("user invalid")
            }    
        })
        const data =await GetLoginData.json();
                console.log("backend data",data)
}
    catch (error){
        console.log("api didnt fetched",error)
        }
    }

    return(
        <>
        <div>
            <div className="bg-white">
                <h1>Karobar</h1>
                <div>
                    <input type="text" placeholder= "Username" value={loginData.username} name="username" onChange={handelChange}/>
                </div>
                <div>
                    <input type="text" placeholder="Password" value={loginData.password} name="password" onChange={handelChange}/>
                </div>
                <div>
                    <button onClick={log}>
                        Login
                    </button>
                </div>
                <div>
                    <Link to={'/signup'}>Wanna create new ?</Link>
                </div>
            </div>
        </div>
        </>

    )
} 
export default Login;