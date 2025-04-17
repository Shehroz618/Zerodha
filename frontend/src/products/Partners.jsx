export default function Partner() {
  return (
    <div className="container">
      <div className="row text-center mb-5">
        <h2>The Zerodha Universe</h2>
        <p>
          {" "}
          Extend your trading and investment experience even further with our
          partner platforms{" "}
        </p>
      </div>
      <div className="row mt-5 p-4 mb-3">
        <div className="col-4 mb-5">
          <div className="card-1">
            <div className="card-img d-flex justify-content-center align-items-center">
              <img
                src="\media\images\zerodhaFundhouse.png"
                className="mb-3"
                style={{ width: "50%", height: "40px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="card-content ">
              <p
                className="lh-sm  text-secondary text-center"
                style={{ fontSize: "14px" }}
              >
                Our asset management venture <br />
                that is creating simple and transparent index <br /> funds to
                help you save for your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="col-4 mb-5">
          <div className="card-2  d-flex flex-column align-items-center">
            <div className="card-img d-flex justify-content-center align-items-center">
              <img
                src="\media\images\zerodhaFundhouse.png"
                className="mb-3"
                style={{ width: "50%", height: "40px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="card-content ">
              <p
                className="lh-base text-secondary text-center"
                style={{ fontSize: "13px" }}
              >
                Options trading platform that lets you <br /> create strategies,
                analyze positions, and examine <br />
                data points like open interest, FII/DII, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="col-4 mb-5">
          <div className="card-3 d-flex flex-column align-items-center">
            <div className="card-img d-flex justify-content-center align-items-center">
              <img
                src="\media\images\tijori.svg"
                className="mb-3"
                style={{ width: "50%", height: "40px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="card-content ">
              <p
                className="lh-sm  text-secondary text-center"
                style={{ fontSize: "14px" }}
              >
                Investment research platform <br /> that offers detailed
                insights on stocks, <br /> sectors, supply chains, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card-4 d-flex flex-column align-items-center">
            <div className="card-img text-center">
              <img
                src="\media\images\streakLogo.png"
                className="mb-3"
                style={{ width: "50%", height: "40px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="card-content ">
              <p
                className="lh-sm  text-secondary text-center"
                style={{ fontSize: "14px" }}
              >
                Systematic trading platform <br />
                that allows you to create and backtest <br />
                strategies without coding.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card-5 d-flex flex-column align-items-center">
            <div className="card-img text-center">
              <img
                src="\media\images\smallcaseLogo.png"
                className="mb-3"
                style={{ width: "50%", height: "40px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="card-content ">
              <p
                className="lh-sm  text-secondary text-center"
                style={{ fontSize: "14px" }}
              >
                Thematic investing platform <br />
                that helps you invest in diversified <br />
                baskets of stocks on ETFs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card-6 d-flex flex-column align-items-center">
            <div className="card-img text-center">
              <img
                src="\media\images\dittoLogo.png"
                className="mb-3"
                style={{ width: "50%", height: "40px", objectFit: "contain" }}
                alt=""
              />
            </div>
            <div className="card-content ">
              <p
                className="lh-sm  text-secondary text-center"
                style={{ fontSize: "14px" }}
              >
                Personalized advice on life <br />
                and health insurance. No spam <br />
                and no mis-selling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5 py-4">
      <button className="btn btn-primary fs-5" style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>

      </div>
    </div>
  );
}
