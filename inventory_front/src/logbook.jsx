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
        price:""
    });
    const handelChange=(e)=>{
        setLogbookData({...LogbookData,[e.target.name]:e.target.value});

    }
    const handelSumit=async()=>{
        try{
            const GetLogbookData=await fetch("http://localhost:8000/controls/logbook",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(LogbookData)
            }); 
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
                            <form action="">
                            <div>
                                <input type="date" name="date" value={"LogbookData.date"} onChange={handelChange}/>
                                <input type="text" name="particular" value={"LogbookData.particular"}  placeholder=" Particulars" onChange={handelChange}/>
                                <input type="text" placeholder="Vendor" />
                                <select name="type" id="" onchange={handelChange} value={"LogbookData.type"}>
                                    <option value="">--transaction type--</option>
                                    <option name="sales" value="LogbookData.sales">Sales</option>
                                    <option name="purchase" value="LogbookData.purchase">Purchase</option>
                                </select>
                                <input type="text" name="price" value={"LogbookData.price"}  placeholder="Price" onChange={handelChange}/>
                            </div>
                            <div>
                                <button onClick={handelSumit}>Post Record</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <h2>Transactions</h2>
                        <table>
                            <th>
                                <td>
                                    Date
                                </td>
                                <td>
                                    Particulars
                                </td>
                                <td>
                                    Purchase/Sales
                                </td>
                                <td>
                                    Price
                                </td>
                            </th>
                            <tr>
                                <td>d</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 
export default Logbook;
