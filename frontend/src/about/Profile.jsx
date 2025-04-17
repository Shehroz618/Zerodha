import { useState } from "react";
export default function Profile(){

  // const [isOpen, setIsOpen] = useState(false);
  const [openBioId,setOpenBioId] = useState(null);

  const toggleEffect = (id) => {
    setOpenBioId(openBioId===id?null:id)
  };

return(<>
<div className="container">

    <div className="row text-center">
    <h3 className=" mb-5 ">People</h3>
    </div>
        <div className="row p-5 ">
          
         
          <div className="col-5  text-center">
            <img
              src="\media\images\nithinKamath.jpg"
              className="rounded-circle"
              style={{ width: "70%" }}
              alt=""
            />
            <h6 className="mt-4">Nithin Kamath</h6>
            <span style={{ fontSize: "0.8rem" }}>Founder, CEO</span>
          </div>
          <div className="col-7">
            <p>{`Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. `}</p>
            <p>{`He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). `}</p>

            <p>{`Playing basketball is his zen.`}</p>

            <p>{`Connect on Homepage / TradingQnA / Twitter`}</p>
          </div>
        </div>
      

      <div className="aboutteam-profile">
        <div className="container">
          <div className="row p-4 g-4">
            <div className="col-4 text-center mb-5">
              <img
                src="\media\images\Nikhil.jpg"
                alt=""
                className="rounded-circle"
                style={{ width: "70%" }}
              />
              <h6 className="mt-4">Nikhil Kamath</h6>
              <span style={{ fontSize: "0.8rem" }}>Co-founder & CFO</span>{" "}
              <br />
              <div className="myBtn">
                <a onClick={()=>toggleEffect(1)} id="bioButton">
                  Bio
                  <i
                    id="dropdown"
                    className={`fa-solid ${
                       openBioId ===1 ? "fa-chevron-up" : "fa-chevron-down"
                    } ms-2`}
                  ></i>
                </a>
                {openBioId ===1 && (
                  <p id="description" className="mt-3 text-start">
                    Kailash has a PhD in Artificial Intelligence & Computational
                    Linguistics, and is the brain behind all our technology and
                    products. He has been a developer from his adolescence and
                    continues to write code every day.
                  </p>
                )}
              </div>
            </div>
            <div className="col-4 text-center mb-5">
              <img
                src="\media\images\Kailash.jpg"
                alt=""
                className="rounded-circle"
                style={{ width: "70%" }}
              />
              <h6 className="mt-4">Dr. Kailash Nadh</h6>
              <span style={{ fontSize: "0.8rem" }}>CTO</span> <br />
              <div className="myBtn">
                <a onClick={ ()=> toggleEffect(2)} id="bioButton">
                  Bio
                  <i
                    id="dropdown"
                    className={`fa-solid ${
                       openBioId ===2 ? "fa-chevron-up" : "fa-chevron-down"
                    } ms-2`}
                  ></i>
                </a>
                {openBioId ===2 && (
                  <p id="description" className="mt-3 text-start">
                    Kailash has a PhD in Artificial Intelligence & Computational
                    Linguistics, and is the brain behind all our technology and
                    products. He has been a developer from his adolescence and
                    continues to write code every day.
                  </p>
                )}
              </div>
            </div>
            <div className="col-4 text-center mb-5">
              <img
                src="\media\images\Venu.jpg"
                alt=""
                className="rounded-circle"
                style={{ width: "70%" }}
              />
              <h6 className="mt-4">Venu Madhav</h6>
              <span style={{ fontSize: "0.8rem" }}>COO</span> <br />
              <div className="myBtn">
                <a onClick={()=>toggleEffect(3)} id="bioButton">
                  Bio
                  <i
                    id="dropdown"
                    className={`fa-solid ${
                       openBioId ===3 ? "fa-chevron-up" : "fa-chevron-down"
                    } ms-2`}
                  ></i>
                </a>
                {openBioId ===3 && (
                  <p id="description" className="mt-3 text-start">
                    Kailash has a PhD in Artificial Intelligence & Computational
                    Linguistics, and is the brain behind all our technology and
                    products. He has been a developer from his adolescence and
                    continues to write code every day.
                  </p>
                )}
              </div>
            </div>
            <div className="col-4 text-center">
              <img
                src="\media\images\Venu.jpg"
                alt=""
                className="rounded-circle"
                style={{ width: "70%" }}
              />
              <h6 className="mt-4">Venu Madhav</h6>
              <span style={{ fontSize: "0.8rem" }}>COO</span> <br />
              <div className="myBtn">
                <a onClick={()=>toggleEffect(4)} id="bioButton">
                  Bio
                  <i
                    id="dropdown"
                    className={`fa-solid ${
                       openBioId === 4 ? "fa-chevron-up" : "fa-chevron-down"
                    } ms-2`}
                  ></i>
                </a>
                {openBioId ===4 && (
                  <p id="description" className="mt-3 text-start">
                    Kailash has a PhD in Artificial Intelligence & Computational
                    Linguistics, and is the brain behind all our technology and
                    products. He has been a developer from his adolescence and
                    continues to write code every day.
                  </p>
                )}
              </div>
            </div>
            <div className="col-4 text-center">
              <img
                src="\media\images\Venu.jpg"
                alt=""
                className="rounded-circle"
                style={{ width: "70%" }}
              />
              <h6 className="mt-4">Venu Madhav</h6>
              <span style={{ fontSize: "0.8rem" }}>COO</span> <br />
              <div className="myBtn">
                <a onClick={()=>toggleEffect(5)} id="bioButton">
                  Bio
                  <i
                    id="dropdown"
                    className={`fa-solid ${
                       openBioId === 5  ? "fa-chevron-up" : "fa-chevron-down"
                    } ms-2`}
                  ></i>
                </a>
                {openBioId ===5 && (
                  <p id="description" className="mt-3 text-start">
                    Kailash has a PhD in Artificial Intelligence & Computational
                    Linguistics, and is the brain behind all our technology and
                    products. He has been a developer from his adolescence and
                    continues to write code every day.
                  </p>
                )}
              </div>
            </div>
            <div className="col-4 text-center">
              <img
                src="\media\images\Venu.jpg"
                alt=""
                className="rounded-circle"
                style={{ width: "70%" }}
              />
              <h6 className="mt-4">Venu Madhav</h6>
              <span style={{ fontSize: "0.8rem" }}>COO</span> <br />
              <div className="myBtn">
                <a onClick={()=>toggleEffect(6)} id="bioButton">
                  Bio
                  <i
                    id="dropdown"
                    className={`fa-solid ${
                       openBioId ===6 ? "fa-chevron-up" : "fa-chevron-down"
                    } ms-2`}
                  ></i>
                </a>
                {openBioId ===6 && (
                  <p id="description" className="mt-3 text-start">
                    Kailash has a PhD in Artificial Intelligence & Computational
                    Linguistics, and is the brain behind all our technology and
                    products. He has been a developer from his adolescence and
                    continues to write code every day.
                  </p>
                )}
              </div>
            </div>
            <div className="col-4 text-center">
              <img
                src="\media\images\Venu.jpg"
                alt=""
                className="rounded-circle"
                style={{ width: "70%" }}
              />
              <h6 className="mt-4">Venu Madhav</h6>
              <span style={{ fontSize: "0.8rem" }}>COO</span> <br />
              <div className="myBtn">
                <a onClick={()=>toggleEffect(7)} id="bioButton">
                  Bio
                  <i
                    id="dropdown"
                    className={`fa-solid ${
                       openBioId ===7 ? "fa-chevron-up" : "fa-chevron-down"
                    } ms-2`}
                  ></i>
                </a>
                {openBioId ===7 && (
                  <p id="description" className="mt-3 text-start">
                    Kailash has a PhD in Artificial Intelligence & Computational
                    Linguistics, and is the brain behind all our technology and
                    products. He has been a developer from his adolescence and
                    continues to write code every day.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </>)

}