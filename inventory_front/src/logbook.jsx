import Nav from "./nav";
function Logbook(){
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
                                <input type="date" name="" value={""} />
                                <input type="text" name="" value={""}  placeholder=" Particulars"/>
                                <select name="" id="">
                                    <option value="sales">--Select--</option>
                                    <option value="sales">Sales</option>
                                    <option value="purchase">Purchase</option>
                                </select>
                                <input type="text" name="" value={""}  placeholder="Price"/>
                            </div>
                            <div>
                                <button>Post Record</button>
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
