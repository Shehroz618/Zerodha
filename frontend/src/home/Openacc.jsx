export default function HomeOpenAccount(){
    return(
       <div className="container mt-5">
        <div className="row  mt-5 px-5" style={{}}>
        <div className="col-md-6 col-12" >
        <img src="\media\images\index-education.svg" alt="" style={{width:"80%"}} />
        </div>
        <div className="col-md-5 col-12" >
            <h2>Free and open market education</h2>
            <p  className="mt-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="">Varsity</a>
            <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="">TradingQ&A</a>
        </div>
       </div>
       <div className="row mt-5 justify-content-center p-4">
        <div className="col-8 text-center ">
        <h2>Open a Zerodha account</h2>
        <p className="fs-5">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button className="btn btn-primary fs-5" style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>
        </div>
       </div>
       </div>
       
    )
}