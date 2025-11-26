import { useState } from "react";
import Nav from "./nav";
function Logbook(){
    const date=new Date();
    const presentDate=date.toLocaleDateString();
    const currentMonth=date.toLocaleString('default',{month:'long'});
    const currentYear=date.getFullYear();
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
    const handelSubmit=async(e)=>{
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
            console.log("api didn't fetched",error)
        }
    } 
    const viewLogbook=async()=>{
        try{
            const GetLogbookData=await fetch("http://localhost:8000/control/view_logbook",{
                method:"GET",
                headers:{
                    "Content-type":"application/json",
                },
            }); 
            const viewlogbookdata=await GetLogbookData.json();
            console.log("backend data",viewlogbookdata)
        }  
        catch(error){
            console.log("api didn't fetched",error)
        }   
    }

    return(
        <>
        <div>
            <div className=" p-5 bg-blue-400 text-white font-bold text-2xl">
                <h1>Welcome,username db bata name aaucha</h1>
            </div>
            <div className="flex">
                <div className="w-1/6 h-screen border-r border-gray-300">
                    <Nav/>
                </div> 
                <div className="w-full">
                    <div>
                        <h1 className="flex justify-center items-center text-xl font-bold m-5 drop-shadow-lg">
                            Record transaction
                        </h1>
                        <div>
                            {/* <div>
                                <input className="border-black-200 shadow-lg rounded-sm" type="date" name="date" value={LogbookData.date} placeholder="date" onChange={handelChange}/>
                                <input className="border-black-200 shadow-lg rounded-sm" type="text" name="particulars" placeholder=" Particulars" value={LogbookData.particulars}   onChange={handelChange}/>
                                <input className="border-black-200 shadow-lg rounded-sm" type="text" placeholder="Vendor" name="vendor" value={LogbookData.vendor} onChange={handelChange} />
                                <select name="type" id="" value={LogbookData.type} onChange={handelChange}>
                                    <option value="">Type</option>
                                    <option value="Purchase">Purchase</option>
                                    <option value="Sales">Sales</option>
                                </select>
                                <input className="border-black-200 shadow-lg rounded-sm" type="text" name="amount" value={LogbookData.amount}  placeholder="Price" onChange={handelChange}/>
                            </div> */}
                            <div className="flex justify-center items-center">
                                <button className="bg-blue-500 w-[300px] font-bold rounded-lg h-[40px]" onClick={handelSubmit}>Post Record</button>
                            </div>
                        </div>
                    </div>
                <div className="flex justify-center items-center m-10">

                        <h2 className="text-xl font-semibold drop-shadow-xl shadow-red-600">Transactions</h2>
                </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>   
                                        <th>Particulars</th>
                                        <th>Vendor</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {/* {
                                    
                                        viewLogbook.map((item)=>{
                                            <tr key={item.id}>
                                                <td>{item.date}</td>
                                                <td>{item.particulars}</td>
                                                <td>{item.vendor}</td>
                                                <td>{item.type}</td>
                                                <td>{item.amount}</td>
                                    </tr>

                                        })
                                        } */}
                                    
                                </tbody>
                            </table>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 
export default Logbook;
