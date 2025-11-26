import React, { useState } from "react";
import Nav from "./nav";

function Purchase_stock(){
    const [PurchaseData,setPurchaseData]=useState({
        date:"",
        product_name:"",
        categories:"",
        brand_name:"",
        quantity:"",
        cost_price:""
    });
    const date=new Date();
        const currentMonth=date.toLocaleString('default',{month:'long'});
    const currentYear=date.getFullYear();
    const presentDate=date.toLocaleDateString();
    const handelChange=(e)=>{
        setPurchaseData({...PurchaseData,[e.target.name]:e.target.value});
    }
    const handelSubmit=async(e)=>{
        e.preventDefault();
        try{ 
            const GetPurchaseData=await fetch("http://localhost:8000/control/purchase_stock",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(PurchaseData)
            });
            console.log("frontend data",PurchaseData)
            const data=await GetPurchaseData.json();
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
            <div className="flex border border-gray-300 rounded-md">
                <div className="w-1/6 h-screen border-r border-gray-300">
                    <Nav/>
                </div>
                <div className="w-full">
                    <div>
                    <div className=" flex justify-end items-end text-lg mr-5">
                        {currentMonth},{currentYear}
                        </div>
                    <div className=" flex justify-end items-end mr-10">
                        {presentDate}</div>
                    </div>
                    <div className="border border-gray-400  rounded-md m-10 p-5">
                        <div className="flex justify-center items-center">
                            <h1 className="font-bold text-xl m-5">
                                Purchase Entries
                            </h1>
                        </div>
                        <div className="flex  justify-center items-center gap-3 mb-5">
                                <input className="border-black-200 shadow-lg rounded-sm" type="date"  name="date" value={PurchaseData.date} onChange={handelChange}/>
                                <input className="border-black-200 shadow-lg rounded-sm" type="text" placeholder="Product Name" value={PurchaseData.product_name} name="product_name" onChange={handelChange} />
                                <input className="border-black-200 shadow-lg rounded-sm" type="text" placeholder="Categories"  name="categories" value={PurchaseData.categories} onChange={handelChange}/>
                                <input className="border-black-200 shadow-lg rounded-sm" type="text" name="brand_name"  value={PurchaseData.brand_name} id="" placeholder="Brand Name" onChange={handelChange}/>
                                <input className="border-black-200 shadow-lg rounded-sm" type="text" placeholder="Quantity" name="quantity" value={PurchaseData.quantity}  onChange={handelChange}/>
                                <input className="border-black-200 shadow-lg rounded-sm" type="text" placeholder="Cost Price" name="cost_price" value={PurchaseData.cost_price}  onChange={handelChange}/>
                                
                        </div>
                                <div className="flex justify-center items-center mt-10">
                                    <button className="bg-blue-500 w-[300px] font-bold rounded-lg h-[40px]" onClick={handelSubmit}>Post Purchase</button>
                                </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center text-xl font-bold">
                            <h1>Purchase History</h1>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>   
            </div>           
        </div>
        </>
    )
}
export default Purchase_stock;