export default function HeroPricing(){
    return(
         <div className="container mb-5">
            <div className="row p-4">
               <div className="headings text-center mt-5 mb-5">
               <h1 style={{fontSize:"3rem"}}>Charges</h1>
               <p className="fs-5 text-muted">List of all charges and taxes</p>
               </div>
                <div className="col-4 mt-5 mb-5 text-center">
                    <img src="\media\images\pricing0.svg" style={{width:"60%"}} alt="" />
                    <h3 className="mb-4">Free equity delivery</h3>
                    <span className="text-muted lh-sm">All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage</span>
                </div>
                <div className="col-4 mt-5 text-center">
                <img src="/media/images/price20.svg" style={{width:"60%"}} alt="" />
                <h3 className="mb-4">Intraday and F&O trades</h3>
                <span className="lh-base text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on intraday trades across equity,currency, and commodity trades. <br /> Flat ₹20 on all option trades.   </span>
                </div>
                <div className="col-4 mt-5 text-center">
                <img src="\media\images\pricing0.svg"  style={{width:"60%"}} alt="" />
                <h3 className="mb-4">Free direct MF</h3>
                <span className="text-muted lg-sm"> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </span>
                </div>
            </div>
         </div>
    )
}