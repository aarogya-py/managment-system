import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
        <div>
            <nav>
                <ul>
                    <div>
                        <Link to={"/home"}>Home</Link>
                    </div>
                    <div>
                        <Link to={"/logbook"}>Logbook</Link>
                    </div>
                    <div>
                        <Link to={"/analytics"}>Analytics</Link>
                    </div> 
                    <div>
                        <Link to={"/purchase_stock"}>Purchase Stock</Link>
                    </div>
                    <div>
                        <Link to={"/sales_record"}>Sales Record</Link>
                    </div>
                    <div>
                        <Link to={"/graphs"}>Graphs</Link>
                    </div>
                    <div>
                        <Link to={"/billing"}>Billings</Link>
                    </div>
                </ul>
            </nav>
        </div>
        </>
    )
} export default Nav;
