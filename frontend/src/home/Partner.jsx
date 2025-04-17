export default function HomePartner(){
    return(
        <div className="container mt-5 mb-5"  >
            <div className="row p-4">
                <div className="col-6">
                    <div className="row">
                        <h3 className="mb-4">Trust with confidence</h3>
                        <div className="col-12 p-3">
                            <h6>Customer-first always</h6>
                            <p>That is why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                        </div>
                        <div className="col-12 p-3">
                            <h6>No spam or gimmicks</h6>
                            <p>No gimmicks, spam, gamification, or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                        </div>
                        <div className="col-12 p-3">
                            <h6>The Zerodha universe</h6>
                            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </div>
                            <div className="col-12 p-3">
                                <h6>Do better with money</h6>
                                <p>With initiatives like Nudge and Kill Switch, we dont just facilitate transactions, but actively help you do better with your money.</p>
                            </div>
                    </div>
                </div>
                <div className="col-6 mt">
                <img src="\media\images\ecosystem.png" alt="" style={{width:"90%"}} className="" />
                <div className="buttons  d-flex gap-4 justify-content-center" style={{width:"80%"}}>
                    <a href="" className="fs-5" style={{textDecoration: "none"}}>Explore our products</a>
                    <a href=""   className="fs-5" style={{textDecoration: "none"}}>Try kite demo</a>
                    
                </div>
                </div>
            </div>

            <div className="row ">
                <img src="\media\images\pressLogos.png" alt="" className="p-4" style={{width:"60%",margin:"0 auto"}}  />
            </div>
        </div>
    )
}