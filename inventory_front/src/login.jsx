import { useState } from "react";
import { Link } from "react-router-dom";
import { } from "react"
import Signup from "./signup";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate=useNavigate();
const [loginData,setloginData]=useState({
    username:"",  
    password:"",
});
const handelChange=(e)=>{
    setloginData({...loginData,[e.target.name]:e.target.value});

};
const log =async () => {
    
    try{
        const GetLoginData=await fetch("http://127.0.0.1:8000/control/Login_verification",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify(loginData)
        }) 
       
            if(GetLoginData.ok){
                console.log(loginData)
                navigate("/home");
                
            }
            else{
                console.log("user invalid")
            }    
        
        const data =await GetLoginData.json();
                console.log("backend data",data)
}
    catch (error){
        console.log("api didnt fetched",error)
        }
    }

    return(
        <>
            <div className=" flex justify-center items-center h-screen">
        <div className="w-[500px] h-[500px] p-6 border border-gray-300 rounded-lg shadow-lg"> 
                <h1 className=" text-center p-5 font-bold text-3xl shadow-lg">Karobar</h1>
                <div className=" flex flex-col gap-5 mt-10 shadow-md ">
                    <input type="text" className="h-[53px]" placeholder= "Username" value={loginData.username} name="username" onChange={handelChange}/>
                </div>
                <div className="flex flex-col gap-5 mt-10 shadow-md">
                    <input type="text" className="h-[53px]" placeholder="Password" value={loginData.password} name="password" onChange={handelChange}/>
                </div>
                <div className="flex flex-col gap-5 mt-10 shadow-lg bg-blue-400 h-[53px] rounded-xl flex justify-center items-center text-white font-bold">
                    <button onClick={log}>
                        Login
                    </button>
                </div>
                <div className="flex flex-col gap-5 mt-10 text-center">
                    <Link to={'/signup'}>Wanna create new ?</Link>
                </div>
            </div>
        </div>
        </>

    )
} 
export default Login;