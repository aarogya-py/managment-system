import Nav from "./nav";
function  Sales_Record(){
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
                                <select name="" id="">
                                    <option value="">loop</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Brands</label>
                                <select name="" id="">
                                    <option value="">loop</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Keywords</label>
                                <div>
                                    <textarea name="" id=""></textarea>
                                </div>
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