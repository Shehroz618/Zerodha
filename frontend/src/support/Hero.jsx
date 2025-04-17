import '../Css/Support.css'
export default function SupportHero(){
    return(
        <>
        <div className="heroContainer p-3 bg-custom-color">
        <div className="container-fluid px-4 py-5 mt-0  text-white">
            {/* <div className="row  mb-3">
              <div className="col-6 ">
              <h5>Support Portal</h5>
              </div>
              <div className="col-6 text-end">
                <a href="" className='text-white'>Track tickets</a>
              </div>
            </div> */}

            <div className="support">
                <h5>Support Portal</h5>
                <a href="#" className='text-white'>Track Tickets</a>
            </div>

          <div className="row ">
            <div className="col-7">
              <h4 className="mb-4">Search for an answer or browse help topics to create a <br /> ticket</h4>
             <div className="searchbox position-relative d-flex align-items-center"> 
                <input type="text" placeholder="ABC.." className="w-100 p-2" />
                <i className="text-muted fs-5 fas fa-search position-absolute pe-4 end-0"></i>
             </div> 
               <div className="d-flex flex-wrap quick-links mt-3">
                <a href="#" className="d-inline-block">Track Account Opening</a>
                <a href="#" className="d-inline-block mx-3" >Track segment Activation</a>
                <a href="#" className="d-inline-block" >Intraday Margins</a>
                <a href="#" className="d-inline-block mt-3">Kite user manual</a>
               </div>


              {/* <div className="row mt-3">
                <div className="col-4 ">
                    <a href="#">Track account opening</a>
                </div>
                <div className="col-4 me-4">
                    <a href="#">  Track segment activation </a>
                </div>
                <div className="col-4" >
                    <a href="#">  Intraday margins </a>
                </div>
             
                <div className="col-4">
                    <a href="#">  Kite user manual </a>
                </div>
              </div> */}
            </div>
            <div className="col-5">
               <div className="">
               <div className=''><h5 className='mt-4'> Featured</h5></div>
                <div>
                <ol className="list-group-numbered  ">
                    <li className="list-group-item mb-3"><a href="#">Latest Intraday leverages and Square-off timings</a></li>
                    <li className="list-group-item"><a href="#">Quarterly Settlement of Funds - January 2025</a></li>
                    
                </ol>
                </div>
               </div>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}