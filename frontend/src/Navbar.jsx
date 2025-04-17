import "./Css/Navbarstyle.css";
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    // <div className="container nav-container">
    //   <div className="row justify-content-space-around">
    //     <div className="col-4 mt-4">
    //       <img src="/media/images/logo.svg" alt="" style={{ width: "50%" }} />
    //     </div>
    //     {/* <div className="col-2 "></div> */}
    //     <div className="d-flex mt-4 col-6 align-items-center flex-row-reverse ">
    //       <a href="#" className="anchor-style fs-5">
    //         Signup
    //       </a>
    //       <a href="" className="anchor-style fs-5">
    //         About
    //       </a>
    //       <a href="" className="anchor-style fs-5">
    //         Products
    //       </a>
    //       <a href="" className="anchor-style fs-5">
    //         Pricing
    //       </a>
    //       <a href="" className="anchor-style fs-5">
    //         Support
    //       </a>
    //     </div>
    //     <div className="col-2 mt-4 d-flex  align-items-center ">
    //       <a href="" className="fs-3">
    //         <i className="fa-solid fa-bars"></i>
    //       </a>
    //     </div>
    //   </div>
    //   <hr />
    // </div>

    <>
    
      <nav className="navbar border-bottom navbar-expand-lg navbar-light bg-light py-3">
      <div className="container">    
      
       <Link className="navbar-brand" href="/">
          <img src="/media/images/logo.svg" alt="" style={{width:"25%"}} />
        </Link>
       
      
       
        <div className="mx-4 collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav mx-4">
            <li className="nav-item anchor-style">
              <Link className="nav-link" href="/">
                Signup <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item anchor-style">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item anchor-style">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item anchor-style">
              <a className="nav-link " href="#">
                Support
              </a>
            </li>
          </ul>
        
        </div>
        <a href="" className="fs-3">
        <i className="fa-solid fa-bars"></i>
          </a>
        </div>  

      </nav>
      
    </>
  );
}
