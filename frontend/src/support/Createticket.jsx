export default function CreateTicket(){
    return(
        <>
        <div className="container" style={{listStyleType:"none"}}>
            <div className="row ticket-row mt-5">
                <h4 className="mb-5">To create a ticket, select a relevant topic</h4>
                <div className="col-4">
                <div className="heading d-flex align-items-center gap-2 text-muted">
                <i className=" fa-solid fa-circle-plus"></i>
                <h4 className="fs-5"> Account Opening </h4>
                </div>
                {/* <h4>
                <a href="#" className="text-muted fs-6 ls mytopHeading">
                    <i className="align-self-center fa-solid fa-circle-plus"></i>Account Opening
                    </a>
                    </h4> */}
                
                   
                   <ul className="d-grid gap-3 listing-div">
                   <li className=""><a href="#" className="">Getting started</a></li>
                    <li><a href="#" className="">Online</a></li>
                    <li><a href="#">Online</a></li>
                    <li><a href="#">Charges</a></li>
                    <li><a href="#">Company, Partnership and HUF</a></li>
                    <li><a href="#">Non Resident Indian (NRI)</a></li>
                    </ul>
                   
               
                </div>
                <div className="col-4">
                <div className="heading d-flex align-items-center gap-2 text-muted">
                
                <i className=" fa-regular fa-user"></i>
                <h4 className="fs-5">  Your Zerodha Account  </h4>
               
                </div>
                <ul className="d-grid gap-3 listing-div">
                   
                   <li><a href="#">Login credentials</a></li>
                    <li><a href="#">Your Profile</a></li>
                    <li><a href="#">Account modification and segment addition</a></li>
                    <li><a href="#">CMR & DP ID</a></li>
                    <li><a href="#">Nomination</a></li>
                    <li><a href="#">Transfer and conversion of shares</a></li>
                   
                </ul>
                </div>
                <div className="col-4">
                <div className=" heading d-flex align-items-center gap-2 text-muted">
                <i className="align-self-center fa-solid fa-money-bill-trend-up"></i>
                <h4 className="fs-5">  Trading and Markets   </h4>
                </div>
                <ul className="d-grid gap-3 listing-div">
                  
                   <li><a href="#">Trading FAQs</a></li>
                    <li><a href="#">Kite</a></li>
                    <li><a href="#">Margins</a></li>
                    <li><a href="#">Product and order types</a></li>
                    <li><a href="#">Corporate actions</a></li>
                    <li><a href="#">Kite features</a></li>
                 
                </ul>
                </div>
                <div className="col-4 mt-5 mb-5">
                <div className=" heading d-flex align-items-center gap-2 text-muted">
                <i className="align-self-center fa-solid fa-wallet"></i>
                <h4 className="fs-5">  Funds    </h4>
                </div>
                <ul className="d-grid gap-3 listing-div">
                   
                   <li><a href="#">Fund withdrawal</a></li>
                    <li><a href="#">Adding funds</a></li>
                    <li><a href="#">Margins</a></li>
                    <li><a href="#">Adding bank accounts</a></li>
                    <li><a href="#">eMandates</a></li>
                    
                  
                </ul>
                </div>
                <div className="col-4 mt-5 mb-5">
                <div className=" heading d-flex align-items-center gap-2 text-muted">
                <i className="align-self-center fa-brands fa-chrome"></i>
                <h4 className="fs-5">  Console     </h4>
                </div>
                <ul className="d-grid gap-3 listing-div">
                   
                   <li><a href="#">IPO</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Funds statement</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Referral program</a></li>
                    
                 
                </ul>
                </div>
                <div className="col-4 mt-5 mb-5">
                <div className=" heading d-flex align-items-center gap-2 text-muted">
                <i className="align-self-center fa-regular fa-circle"></i>
                <h4 className="fs-5">  	Coin      </h4>
                </div>
                <ul className="d-grid gap-3 listing-div">
                   
                   <li><a href="#">Understanding mutual funds and Coin</a></li>
                    <li><a href="#">Coin app</a></li>
                    <li><a href="#">Coin web</a></li>
                    <li><a href="#">Transactions and reports</a></li>
                    <li><a href="#">National Pension Scheme (NPS)</a></li>
                    
                    
                   
                </ul>
                </div>
            </div>
        </div>
        </>  
    )
    
}