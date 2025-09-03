import { useState,useEffect } from "react"
function Login(){
const [loginData,setloginData]=useState([
    username="",
]);
useEffect(() =>{
    try{
        const GetLoginData=fetch(localll,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify(data)
        }) 
        .then(response=>{
            if(response){
                console("user Vaild")
            }
            else{
                console("user invalid")
            }    
        })
}
    catch (error){
        console.log("api didnt fetched",error)
        }

},[])
    return(
        <>
        <div>
            <div>
                <h1>Karobar</h1>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <button>

                    </button>
                </div>
                <div>
                    <Link to={''}><button></button></Link>
                </div>
            </div>
        </div>
        </>

    )
}