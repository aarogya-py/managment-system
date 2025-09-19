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
    const month=date.getMonth();
    const day=date.getDate();
    const year=date.getFullYear();
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
            <div>
                <h1>
                    welcome user
                </h1>
            </div> 
            <div>
                <div>
                    <Nav/>
                </div> 
                <div>
                    <div>
                        <p>month</p>
                        <p>date</p>
                    </div>
                    <div>
                        <div>
                            <h1>
                                Purchase Entries
                            </h1>
                        </div>
                        <div>
                                <input type="date"  name="date" value={PurchaseData.date} onChange={handelChange}/>
                                <input type="text" placeholder="Product Name" value={PurchaseData.product_name} name="product_name" onChange={handelChange} />
                                <input type="text" placeholder="Categories"  name="categories" value={PurchaseData.categories} onChange={handelChange}/>
                                <input type="text" name="brand_name"  value={PurchaseData.brand_name} id="" placeholder="Brand Name" onChange={handelChange}/>
                                <input type="text" placeholder="Quantity" name="quantity" value={PurchaseData.quantity}  onChange={handelChange}/>
                                <input type="text" placeholder="Cost Price" name="cost_price" value={PurchaseData.cost_price}  onChange={handelChange}/>
                                
                                <div>
                                    <button onClick={handelSubmit}>Post Purchase</button>
                                </div>
                        </div>
                    </div>
                    <div>
                        <div>
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