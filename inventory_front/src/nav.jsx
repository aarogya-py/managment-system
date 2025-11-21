import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
        <div>
            <nav>
                <ul>
                    <div className="font-bold py-5 flex justify-center">
                        <Link to={"/home"}>Home</Link>
                    </div>
                    <div className="font-bold py-5 flex justify-center">
                        <Link to={"/logbook"}>Logbook</Link>
                    </div>
                    <div className="font-bold py-5 flex justify-center">
                        <Link to={"/analytics"}>Analytics</Link>
                    </div> 
                    <div className="font-bold py-5 flex justify-center">
                        <Link to={"/purchase_stock"}>Purchase Stock</Link>
                    </div>
                    <div className="font-bold py-5 flex justify-center">
                        <Link to={"/sales_record"}>Sales Record</Link>
                    </div>
                    <div className="font-bold py-5 flex justify-center">
                        <Link to={"/graphs"}>Graphs</Link>
                    </div>
                    <div className="font-bold py-5 flex justify-center">
                        <Link to={"/billing"}>Billings</Link>
                    </div>
                </ul>
            </nav>
        </div>
        </>
    )
} export default Nav;
