import Nav from "./nav";
import { useState } from "react";
function  Sales_Record(){
    const [SalesData,setSalesData]=useState({
        categories:"",
        brands:"",
        keywords:""
    });
    const date=new Date();
     const presentDate=date.toLocaleDateString();
    const currentMonth=date.toLocaleString('default',{month:'long'});
    const currentYear=date.getFullYear();

    const handelChange=(e)=>{
        setSalesData({...SalesData,[e.target.name]:e.target.value});
    }

    const handelSubmit=async()=>{
        try{
            const GetSalesData=await fetch("http://localhost:8000/control/Sales_record",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(SalesData)
            });
            console.log("frontend data",SalesData)
            const data=await GetSalesData.json();
            console.log("backend data",data)
        }   
        catch(error){
            console.log("api didnt fetched",error)
        }
    }

    return(
        <>
            <div>
            <div className=" p-5 bg-blue-400 text-white font-bold text-2xl">
                <h1>Welcome,username db bata name aaucha</h1>
            </div>
            <div className="flex border border-gray-300">
                <div className="w-1/6 h-screen border-r border-gray-300">
                    <Nav/>
                </div>
                <div className="w-full">
                    <div className=" flex justify-end items-end text-lg mr-5">
                        {currentMonth},{currentYear}
                        </div>
                    <div className=" flex justify-end items-end mr-10">
                        {presentDate}
                </div>
                    
                <div>
                    <div>
                        <div className="flex gap-10 justify-center mt-10">
                            <div className="border border-gray-300 p-5 shadow-lg rounded-lg w-[200px] h-[50px] flex justify-center items-center">
                                <select name="categories" value={SalesData.categories} onChange={handelChange} id="">
                                    <option value="caa"></option>
                                </select>
                            </div>
                        <div className="border border-gray-300 p-5 shadow-lg rounded-lg w-[200px] h-[50px] flex justify-center items-center">
                                <select name="brands" value={SalesData.brands} onChange={handelChange} id="">
                                    <option value="">loop</option>
                                </select>
                            </div>
                            <div>
                            <div className="border border-gray-300 p-5 shadow-lg rounded-lg w-[200px] h-[50px] flex justify-center items-center">
                                    <textarea name="keywords" value={SalesData.keywords}  onChange={handelChange} id=""></textarea>
                                </div>
                                <button className="bg-blue-500 font-semibold mt-5 rounded-lg w-[200px] h-[40px]" onClick={handelSubmit}>Search</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 m-20">
                            <div className="w-[300px] h-[150px] bg-black">stock six month pre</div>
                            <div className="w-[300px] h-[150px] bg-black">stock six month pre</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <table className="border border-gray-300  shadow-lg rounded-lg ">
                                <th className="border border-gray-300 p-5 gap-5">
                                    <td>
                                        Product id
                                    </td>
                                    <td>
                                        Name
                                    </td>
                                    <td>
                                        Date
                                    </td>
                                    <td>
                                        Cost Price
                                    </td>
                                    <td>
                                        Selling Price 
                                    </td>
                                    <td>
                                        Profit
                                    </td>
                                </th>
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        </div>
        </>
    )

}
export default Sales_Record;