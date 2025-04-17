export function ProductLeftImg() {
  return (
    <>
      <div className="container mt-5 p-4 mb-5">
        <div className="row ">
          <div className="col-8">
            <img src="\media\images\kite.png" alt="" />
          </div>
          <div className="col-4 mt-4 p-4">
            <h2>Kite</h2>
            <p>
              Our ultra-fast flagship trading platform with streaming market
              data, advanced charts, an elegant UI, and more. Enjoy the Kite
              experience seamlessly on your Android and iOS devices.{" "}
            </p>
            <div className="row ">
              <div className="col-4">
                <a href="">Try demo </a>
              </div>

              <div className="col-4">
                <a href="">Learn more</a>
              </div>
            </div>
            <div className="buttons mt-4 d-flex gap-3">
              <a href="#">
                <img
                  src="\media\images\googlePlayBadge.svg"
                  style={{ width: "140px", height: "auto" }}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="\media\images\appstoreBadge.svg"
                  style={{ width: "130px", height: "auto" }}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ProductLeftImgTwo() {
  return (
    <div className="container mt-4 p-4 mb-2">
      <div className="row ">
        <div className="col-8">
          <img src="\media\images\coin.png" alt="" />
        </div>
        <div className="col-4 mt-4 p-4">
          <h2>Kite</h2>
          <p>
            Buy direct mutual funds online, commission-free, delivered directly
            to your Demat account. Enjoy the investment experience on your
            Android and iOS devices.
          </p>
          <div className="row ">
            <a href="">Coin </a>
          </div>
          <div className="buttons mt-2 d-flex gap-3">
            <a href="#">
              <img
                src="\media\images\googlePlayBadge.svg"
                style={{ width: "140px", height: "auto" }}
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="\media\images\appstoreBadge.svg"
                style={{ width: "130px", height: "auto" }}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export function ProductLeftImgThree() {
  return (
    <>
      <div className="container mt-4 p-4 mb-2">
        <div className="row p-5 ">
          <div className="col-8">
            <img src="\media\images\varsity.png" alt="" />
          </div>
          <div className="col-4 align-self-center">
            <h2 className="mb-3">Varsity mobile</h2>
            <p className="lh-lg">
              An easy to grasp, collection of stock market lessons with in-depth
              coverage and illustrations. Content is broken down into bite-size
              cards to help you learn on the go.
            </p>

            <div className="buttons mt-2 d-flex gap-3">
              <a href="#">
                <img
                  src="\media\images\googlePlayBadge.svg"
                  style={{ width: "140px", height: "auto" }}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="\media\images\appstoreBadge.svg"
                  style={{ width: "130px", height: "auto" }}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 p-5">
        <div className="row text-center">
          <h4 className="fs-5">
            Want to know more about our technology stack? Check out the
            Zerodha.tech blog.
          </h4>
        </div>
      </div>
    </>
  );
}
