import Nav from "./nav";
function Billing(){
     const date =new Date();
    const presentDate=date.toLocaleDateString();
    const currentMonth=date.toLocaleString('default',{month:'long'});
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
            <div className="border border-black w-full m-10">
                <h1 className="flex justify-center items-center">store name</h1>
                <div className="flex justify-end items-end mr-10">
                    <p>{currentMonth}</p>
                </div>
                 <div className="flex justify-end items-end mr-10">
                    <p>{presentDate}</p>
                </div>
                <div>
                    <p>Companyname</p>
                    <p>address</p>
                    <p>phone number</p>
                    <p>email</p>
                </div>
                <div>
                    <input type="text" placeholder="Customer Name"/>
                    <input type="text" placeholder="Customer Phone Number"/>
                    <input type="text" placeholder="Customer Email"/>
                </div>
                <div>
                    <div>
                        <div>
                            <h4>S.N.</h4>
                            <h4>Particular</h4>
                            <h4>Quantity</h4>
                            <h4>Rate</h4>
                            <h4>Amount</h4>
                        </div>
                        <div>
                            <p>1</p>
                            <p>item name</p>
                            <p>1</p>    
                        </div>
                        <div>
                            <p>total</p>
                            <p>tax</p>
                            <p>grand total</p>
                        </div>
                        <div>
                            <div>
                                <p>Note:The product after sales are not returned</p>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p>Authorised Signatory</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        </div>
        </>
    )

}
export default Billing;