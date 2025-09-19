import Nav from "./nav";
function Home(){
    const date=new Date();
    const month=date.getMonth();
    const year=date.getFullYear();
    const day=date.getDate();
    const presentDate=date.toLocaleDateString();
    const currentMonth=date.toLocaleString('default',{month:'long'});
    const currentYear=date.getFullYear();
    
    return(

        <>
        <div>
            <div>
            <div>
                <h1>Welcome,username db bata name aaucha</h1>
            </div>
            <div className="flex">
                <div>
                    <Nav/>
                </div>
                <div>
                    <div>
                    <div>{currentMonth},{currentYear}</div>
                    <div>{presentDate}</div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>Total Purchase</p>
                                <p>Rs.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Total Revenue</p>
                                <p>Rs.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Net Profit</p>
                                <p>Rs.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Grown Rate</p>
                                <p>%</p>
                            </div>
                        </div>
                        <div>
                            graph
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home;