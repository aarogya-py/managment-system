import { useState } from "react";
import Nav from "./nav";
function Logbook(){
    const date=new Date();
    const month=date.getMonth();
    const year=date.getFullYear();
    const day=date.getDate();
    const[LogbookData,setLogbookData]=useState({
        date:"",
        particulars:"",
        vendor:"",
        type:"",
        amount:""
    });
    const handelChange=(e)=>{
        setLogbookData({...LogbookData,[e.target.name]:e.target.value});

    }
    const handelSumit=async(e)=>{
        e.preventDefault();
        try{
            const GetLogbookData=await fetch("http://localhost:8000/control/logbook",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(LogbookData)
            }); 
            console.log("frontend data",LogbookData)
            const data=await GetLogbookData.json();
            console.log("backend data",data)
        }   
        catch(error){
            console.log("api didnt fetched",error)
        }
    }   

    return(
        <>
        <div>
            <div>
                <h1>company name</h1>
            </div>
            <div>
                <div>
                    <Nav />
                </div>  
                <div>
                    <div>
                        <h1>
                            Record transaction
                        </h1>
                        <div>
                            <div>
                                <input type="date" name="date" value={LogbookData.date} placeholder="date" onChange={handelChange}/>
                                <input type="text" name="particulars" placeholder=" Particulars" value={LogbookData.particulars}   onChange={handelChange}/>
                                <input type="text" placeholder="Vendor" name="vendor" value={LogbookData.vendor} onChange={handelChange} />
                                <select name="type" id="" value={LogbookData.type} onChange={handelChange}>
                                    <option value="">Type</option>
                                    <option value="Purchase">Purchase</option>
                                    <option value="Sales">Sales</option>
                                </select>
                                <input type="text" name="amount" value={LogbookData.amount}  placeholder="Price" onChange={handelChange}/>
                            </div>
                            <div>
                                <button onClick={handelSumit}>Post Record</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Transactions</h2>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 
export default Logbook;
