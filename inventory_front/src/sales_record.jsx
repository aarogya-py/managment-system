import Nav from "./nav";
import { useState } from "react";
function  Sales_Record(){
    const date=new Date();
    const month=date.getMonth();
    const year=date.getFullYear();
    const day=date.getDate();   
    const [SalesData,setSalesData]=useState({
        categories:"",
        brands:"",
        keywords:""
    });
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
            <div>
                <h1>Welcome user</h1>
            </div>
            <div>
                <div>
                    <Nav />
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <label htmlFor="">Categories</label>
                                <select name="categories" value={SalesData.categories} onChange={handelChange} id="">
                                    <option value="">loop</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Brands</label>
                                <select name="brands" value={SalesData.brands} onChange={handelChange} id="">
                                    <option value="">loop</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Keywords</label>
                                <div>
                                    <textarea name="keywords" value={SalesData.keywords}  onChange={handelChange} id=""></textarea>
                                </div>
                                <button onClick={handelSubmit}>Search</button>
                            </div>
                        </div>
                        <div>
                            <div>stock six month pre</div>
                            <div>stock six month post</div>
                        </div>
                        <div>
                            <table>
                                <th>
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
        </>
    )

}
export default Sales_Record;