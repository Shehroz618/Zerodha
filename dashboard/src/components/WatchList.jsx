// import React, { useState, useContext } from "react";

// import axios from "axios";

// import GeneralContext from "./GeneralContext";

// import { Tooltip, Grow } from "@mui/material";

// import {
//   BarChartOutlined,
//   KeyboardArrowDown,
//   KeyboardArrowUp,
//   MoreHoriz,
// } from "@mui/icons-material";

// import { watchlist } from "../data/data";
// import { DoughnutChart } from "./DoughnoutChart";

// const labels = watchlist.map((subArray) => subArray["name"]);

// const WatchList = () => {
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Price",
//         data: watchlist.map((stock) => stock.price),
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.5)",
//           "rgba(54, 162, 235, 0.5)",
//           "rgba(255, 206, 86, 0.5)",
//           "rgba(75, 192, 192, 0.5)",
//           "rgba(153, 102, 255, 0.5)",
//           "rgba(255, 159, 64, 0.5)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // export const data = {
//   //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   // datasets: [
//   //   {
//   //     label: "# of Votes",
//   //     data: [12, 19, 3, 5, 2, 3],
//   //     backgroundColor: [
//   //       "rgba(255, 99, 132, 0.2)",
//   //       "rgba(54, 162, 235, 0.2)",
//   //       "rgba(255, 206, 86, 0.2)",
//   //       "rgba(75, 192, 192, 0.2)",
//   //       "rgba(153, 102, 255, 0.2)",
//   //       "rgba(255, 159, 64, 0.2)",
//   //     ],
//   //     borderColor: [
//   //       "rgba(255, 99, 132, 1)",
//   //       "rgba(54, 162, 235, 1)",
//   //       "rgba(255, 206, 86, 1)",
//   //       "rgba(75, 192, 192, 1)",
//   //       "rgba(153, 102, 255, 1)",
//   //       "rgba(255, 159, 64, 1)",
//   //     ],
//   //     borderWidth: 1,
//   //   },
//   // ],
//   // };

//   return (
//     <div className="watchlist-container">
//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="counts"> {watchlist.length} / 50</span>
//       </div>

//       <ul className="list">
//         {watchlist.map((stock, index) => {
//           return <WatchListItem stock={stock} key={index} />;
//         })}
//       </ul>

//       <DoughnutChart data={data} />
//     </div>
//   );
// };

// export default WatchList;

// const WatchListItem = ({ stock }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false);

//   const handleMouseEnter = (e) => {
//     setShowWatchlistActions(true);
//   };

//   const handleMouseLeave = (e) => {
//     setShowWatchlistActions(false);
//   };

//   return (
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="item">
//         <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="down" />
//           )}
//           <span className="price">{stock.price}</span>
//         </div>
//       </div>
//       {showWatchlistActions && <WatchListActions uid={stock.name} />}
//     </li>
//   );
// };

// const WatchListActions = ({ uid }) => {
//   const generalContext = useContext(GeneralContext);

//   const handleBuyClick = () => {
//     generalContext.openBuyWindow(uid);
//   };

//   return (
//     <span className="actions">
//       <span>
//         <Tooltip
//           title="Buy (B)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//           onClick={handleBuyClick}
//         >
//           <button className="buy">Buy</button>
//         </Tooltip>
//         <Tooltip
//           title="Sell (S)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="sell">Sell</button>
//         </Tooltip>
//         <Tooltip
//           title="Analytics (A)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="action">
//             <BarChartOutlined className="icon" />
//           </button>
//         </Tooltip>
//         <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//           <button className="action">
//             <MoreHoriz className="icon" />
//           </button>
//         </Tooltip>
//       </span>
//     </span>
//   );
// };

import { watchlist } from "../data/data";
import React from "react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material"; // Assuming you are using MUI components
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DoughnutChart } from "./DoughnoutChart";

export default function WatchList() {
  const [clickedIndex, setClickedIndex] = useState(null);

//  const data = {
//     labels: watchlist.map((singlewatchlist)=>singlewatchlist.name),
//     datasets: [
//       {
//         label: 'stock information',
//         data: watchlist.map((singlewatchlist)=>singlewatchlist.name),
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

  const data = {
    labels:  watchlist.map((singlewatchlist)=>singlewatchlist.name),
    datasets: [
      {
        label: 'My First Dataset',
        data: watchlist.map((singlewatchlist)=>singlewatchlist.price),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
    
      },
    ],
  };

  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg: any stock"
          />
          <span className="counts">{watchlist.length}</span>
        </div>

        <ul className="List">
          {watchlist.map((stock, index) => {
            return (
              <WatchListItem
                stock={stock}
                key={index}
                isClicked={clickedIndex === index}
                onClick={() => setClickedIndex(index)}
              />
            );
          })}
        </ul>

        <DoughnutChart data={data} />
      </div>
    </>
  );
}

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const itemInfoRef = useRef(null); // Reference to itemInfo div

  const mouseEnter = () => {
    setShowWatchlistActions(true);
    if (itemInfoRef.current) {
      itemInfoRef.current.classList.add("nonActive"); // Add class on mouse enter
    }
  };

  const mouseRemove = () => {
    if (itemInfoRef.current) {
      itemInfoRef.current.classList.remove("nonActive");
    }
    setShowWatchlistActions(true);
  };

  return (
    <>
      <li
        className="li-list"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseRemove}
      >
        <div className="item">
          <p>{stock.name}</p>
          <div ref={itemInfoRef} className="itemInfo">
            <span>{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDownIcon className="down" />
            ) : (
              <KeyboardArrowUpIcon className="up" />
            )}

            <span>{stock.price}</span>
          </div>
          {showWatchlistActions && <WatchListActions />}
        </div>
      </li>
    </>
  );
};

// const BuyWindow = ( {setShowBuyWindow} ) => {
//   const [qty, setQty] = useState("");
//   const [price, setPrice] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = { qty, price };

//     try {
//       const response = await axios.post(
//         "http://localhost:3002/ordersdata",
//         data
//       );
//       setShowBuyWindow(false);
     
//       // console.log("data saved", response.data);
    
//     } catch (err) {
//       console.log("err for saving data", err);
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-6">
//             <input
//               type="text"
//               value={qty}
//               placeholder="QTY"
//               onChange={(e) => setQty(e.target.value)}
//             />
//           </div>
//           <div className="col-6">
//             <input
//               type="text"
//               placeholder="price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>
//           <div className="col-6">
//             <button onClick={() => setShowBuyWindow(false)}>Cancel</button>
//           </div>

//           <div className="col-6">
//             <button type="submit">Buy</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };



const BuyActionWindow = ({setShowBuyWindow})=>{
  const [stockQuantity,setStockQuantity] = useState(1)
  const [stockPrice,setStockPrice] = useState(0.0)
  
  const handleBuyClick = async ()=>{
    let data = {stockQuantity,stockPrice}
  
   const req = await axios.post('http://localhost:3002/ordersdata',data);
   setShowBuyWindow(false); 
   console.log('data sent',req.data)
  }

  return(
    <>
     <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
           <legend>Qty.</legend>
           <input type="number" 
           name="qty"
           id="qty"
           onChange={(e)=>setStockQuantity(e.target.value)}
           />
          </fieldset>

          <fieldset>
           <legend>Price.</legend>
           <input type="number" 
           name="price"
           id="price"
           onChange={(e)=>setStockPrice(e.target.value)}
           />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>ABC</span>
        <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
        <Link className="btn btn-grey" >Buy</Link>
      </div>
     </div>
    </>
  )
}

const WatchListActions = () => {
  const [showBuyWindow, setShowBuyWindow] = useState(false);

  const handleBuyClick = () => {
    setShowBuyWindow(!showBuyWindow);
  };
  return (
    <>
      <span className="actions">
        <span>
          <Tooltip
            title="Buy"
            placement="top"
            arrow
            slots={{ transition: Grow }}
          >
            <button className="buy" onClick={handleBuyClick}>
              Buy
            </button>
          </Tooltip>
          <Tooltip
            title="Sell "
            placement="top"
            arrow
            slots={{ transition: Grow }}
          >
            <button className="sell ">sell</button>
          </Tooltip>
          <Tooltip
            title="Analytics"
            placement="top"
            arrow
            slots={{ transition: Grow }}
          >
            <button className="action">
              {" "}
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>
          <Tooltip
            title="More"
            placement="bottom"
            arrow
            slots={{ transition: Grow }}
          >
            <button className="action">
              {" "}
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
      </span>

      {showBuyWindow && <BuyActionWindow setShowBuyWindow={setShowBuyWindow} />}
    </>
  );
};
