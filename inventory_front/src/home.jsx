import Nav from "./nav";
function Home(){
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
                    <div>month</div>
                    <div>date</div>
                    </div>
                    <div>
                        <div>total expenses</div>
                        <div>total earning</div>
                        <div>profit</div>
                        <div>growth rate</div>
                    </div>

                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home;