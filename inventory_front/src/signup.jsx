import Login from "./login";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup(){
    const nagivate=useNavigate();
    const [SignupData,setSignupData]=useState({
        email:"",
        username:"",
        password:"",
        confirm_password:"",
    });
    const handelChange=(e)=>{
        setSignupData({...SignupData,[e.target.name]:e.target.value});
    };
    const [Emailmessage,setEmailMessage]=useState("");   
    const [UsernameMessage,setUsernameMessage]=useState("");

    const handelSubmit=async()=>{
        try{
            const GetSignupData=await fetch("http://localhost:8000/controls/loginSignup",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(SignupData)
            }); 
            const data=await GetSignupData.json();
            if (data=="email_exist"){
                setEmailMessage("*Email already exists"); 
            }
            else if(data=="username_exist"){
                setUsernameMessage("*Username already exists");
        }
            else if(data=="confirm_dont_match"){
                alert("Password and Confirm Password do not match");
            }
            else{
                alert("Signup Successful");
            }
        }
    catch(error){
        console.log("api didnt fetched",error)
    }
}
    return(
        <>
            <div className=" flex justify-center items-center h-screen">
        <div className="w-[500px] h-[550px] p-6 border border-gray-300 rounded-lg shadow-lg"> 
                <div>
                <h1 className=" text-center p-5 font-bold text-3xl shadow-lg">Karobar</h1>
                </div>
                <div className=" flex flex-col gap-5 mt-10 shadow-md ">
                    <input type="text" placeholder="Email*"  required name="email" value={SignupData.email} onChange={handelChange}/>
                </div>
                <div className=" flex flex-col gap-5 mt-10 shadow-md ">
                    <input type="text" placeholder="Username*" required name="username" value={SignupData.username} onChange={handelChange}/>
                </div>
                <div className=" flex flex-col gap-5 mt-10 shadow-md ">
                    <input type="text" placeholder="Password*" required name="password" value={SignupData.password} onChange={handelChange}/>
                </div>
                                <div className=" flex flex-col gap-5 mt-10 shadow-md ">

                    <input type="text" placeholder="Confirm Password*" required name="confirm_password" value={SignupData.confirm_password} onChange={handelChange} />
                </div>
                <div className="flex flex-col gap-5 mt-10 shadow-lg bg-blue-400 h-[53px] rounded-xl flex justify-center items-center text-white font-bold">
                    <button onClick={handelSubmit}>Submit</button>
                </div>
                <div className="flex flex-col gap-5 mt-10 text-center">
                    <Link to={"/"}>Already has an account?</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Signup;