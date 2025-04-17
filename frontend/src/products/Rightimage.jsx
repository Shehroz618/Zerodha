import { Link } from "react-router-dom"


export function ProductRightImg(){
    return(
        <>
         <div className="container">
            <div className="row">
                <div className="col-4 align-self-center">
                    <h2 className="mb-3">Console </h2>
                    <p className="lh-lg"> The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. </p>
                     <Link to='#'>Learn more <i  className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div className="col-1"></div>
                <div className="col-7">
                    <img src="\media\images\console.png" style={{width:'100%'}} alt="" />
                </div>
            </div>
         </div>
        </>
    )
}
export function ProductRightImgTwo(){
    return(
        <>
         <div className="container mt-5">
            <div className="row">
                <div className="col-4 align-self-center">
                    <h2 className="mb-3">Kite Connect API</h2>
                    <p className="lh-lg">  Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase. </p>
                     <Link to='#'> Kite Connect <i  className="fa-solid fa-arrow-right fa-sm"></i></Link>
                </div>
                <div className="col-1"></div>
                <div className="col-7">
                    <img src="\media\images\kiteconnect.png" style={{width:'90%'}} alt="" />
                </div>
            </div>
         </div>
        </>
    )
}