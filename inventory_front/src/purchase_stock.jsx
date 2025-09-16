import Nav from "./nav";
function Purchase_stock(){
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
                            <form action="">
                                <input type="date" />
                                <input type="text" placeholder="Product Name" />
                                <input type="text" placeholder="Categories" />
                                <input type="text" name="" id="" placeholder="Brand Name" />
                                <input type="text" placeholder="Cost Price" />
                                <div>
                                    <button>Post Purchase</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Purchase History</h1>
                        </div>
                        <div>
                            <table>

                            </table>
                        </div>
                    </div>
                </div>   
            </div>           
        </div>
        </>
    )
}
export default Purchase_stock;