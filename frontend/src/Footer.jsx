import "./Css/Footerstyle.css"

export default function FooterSection() {
    return(
        <div className="container ">
               <div className="row mb-5">
                <div className="col-3 " >
                    <img src="/media/images/logo.svg" alt="" className="mb-3" style={{width:"70%"}} / >
                    <p>© 2010 - 2024, Zerodha Broking Ltd. </p>
                    <p>All rights reserved.</p>
                    <div className="row">
                   <div className="col mb-3">
                   <span className="mx-2 fs-5"><i className="fa-brands fa-square-facebook"></i></span>
                    <span className="mx-2 fs-5" ><i className="fa-brands fa-x-twitter"></i></span>
                    <span className="mx-2 fs-5"><i className="fa-brands fa-square-instagram"></i></span>
                    <span  className="mx-2 fs-5"><i className="fa-brands fa-linkedin"></i></span>
                   </div>
                    <hr />
                   <div className="col">
                   <span className="mx-2 fs-5" ><i className="fa-brands fa-youtube"></i></span>
                    <span className="mx-2 fs-5"><i className="fa-brands fa-whatsapp"></i></span>
                    <span className="mx-2 fs-5"><i className="fa-brands fa-telegram"></i></span>
                   </div>
                    </div>

                </div>
                <div className="col-3">
                    <ul className="nav-head" style={{listStyle:"none"}}>
                        <li className="  fs-4 fw-bold ">Company</li>
                        <li className="listItemsFooter">About</li>
                        <li className="listItemsFooter">Products</li>
                        <li className="listItemsFooter">Pricing</li>
                        <li className="listItemsFooter">Referral programme</li>
                        <li className="listItemsFooter" >Careers</li>
                        <li className="listItemsFooter">Zerodha.tech</li>
                        <li className="listItemsFooter">Press & media</li>
                        <li className="listItemsFooter">Zerodha Cares (CSR) </li>
                    </ul>

                </div>
                <div className="col-3">
                    <ul className="nav-head" style={{listStyle:"none"}}>
                        <li className="  fs-4 fw-bold ">Support</li>
                        <li className="listItemsFooter">Contact us</li>
                        <li className="listItemsFooter">Support portal</li>
                        <li className="listItemsFooter">Z-Connect blog</li>
                        <li className="listItemsFooter">List of charges</li>
                        <li className="listItemsFooter" >Downloads & resources</li>
                        <li className="listItemsFooter">Videos</li>
                        <li className="listItemsFooter">Market overview</li>
                        <li className="listItemsFooter">How to file a complaint?</li>
                        <li className="listItemsFooter">Status of your complaints</li>
                        
                    </ul>

                </div>
                <div className="col-3">
                    <ul className="nav-head" style={{listStyle:"none"}}>
                    <li className="  fs-4 fw-bold ">Account</li>
                    <li className="listItemsFooter">Open an account</li>
                    <li className="listItemsFooter">Fund transfer</li>
                       
                        
                    </ul>

                </div>
               </div>

               <div className="row">
                <div className="col footerContent text-muted fs-7">
                    <p>{`Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF`}</p>
                   <p>`Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances`</p>
                  <a href="">Grievances Redressal Mechanism</a> { " | "} <a href="">Smart Online Dispute Resolution</a>
                   <p className="mt-3">Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                   <p>{`Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.`}</p>

                  <p>`Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.`</p>
                </div>
               </div>
        </div>
    )
}