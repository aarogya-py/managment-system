import Nav from "./nav";
function Home(){
    const date=new Date();
    const presentDate=date.toLocaleDateString();
    const currentMonth=date.toLocaleString('default',{month:'long'});
    const currentYear=date.getFullYear();
    
    return(

        <>
        <div>
            <div>
            <div className=" p-5 bg-blue-400 text-white font-bold text-2xl">
                <h1>Welcome,username db bata name aaucha</h1>
            </div>
            <div className="flex border border-gray-300">
                <div className="w-1/6 h-screen border-r border-gray-300">
                    <Nav/>
                </div>
                <div className="w-full">
                    <div>
                    <div className=" flex justify-end items-end text-lg mr-5">
                        {currentMonth},{currentYear}
                        </div>
                    <div className=" flex justify-end items-end mr-10">
                        {presentDate}</div>
                    </div>
                        <div className="grid grid-cols-4 flex mt-10 ml-10 gap-5">
                    <div>
                            <div className="w-[260px] h-[120px] bg-black ">
                                <p>Total Purchase</p>
                                <p>Rs.</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-[260px] h-[120px] bg-black">
                                <p>Total Revenue</p>
                                <p>Rs.</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-[260px] h-[120px] bg-black">
                                <p>Net Profit</p>
                                <p>Rs.</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-[260px] h-[120px] bg-black">
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