// import React from "react";

// import { positions } from "../data/data";

// const Positions = () => {
//   return (
//     <>
//       <h3 className="title">Positions ({positions.length})</h3>

//       <div className="order-table">
//         <table>
         
//           <tr>
//             <th>Product</th>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg.</th>
//             <th>LTP</th>
//             <th>P&L</th>
//             <th>Chg.</th>
//           </tr>
          

//           {positions.map((stock, index) => {
//             const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";

//             return (

//                 <tr key={index}>
//                 <td>{stock.product}</td>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
              
//             );
//           })}
//         </table>
//       </div>
//     </>
//   );
// };

// export default Positions;

import { useState,useEffect } from "react";
import { positions } from "../data/data"
import axios from 'axios'

export default function Positions(){
  const[allPositions,setAllPositions] = useState([]);
   
  useEffect(()=>{
    axios.get('http://localhost:3002/positions')
    .then(response=>
      setAllPositions(response.data))
     .catch((err)=>console.log(err))
   },[])

  return(
    <>
     <h3>we've {allPositions.length} positions</h3>
     <table className="table">
      <thead>
      <tr>
        <td>Product</td>
        <td>Instrument</td>
        <td>Qty</td>
        <td>Avg</td>
        <td>LTP</td>
        <td>P&L</td>
        <td>Chg</td>
      </tr>
      </thead>

    {  allPositions.map((stock,index)=>{
  const curValue = stock.price * stock.qty;
  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
  const profClass = isProfit ? "profit" : "loss";
  const dayClass = stock.isLoss ? "loss" : "profit";
       return( 
        <tr key={index}>
                        <td>{stock.product}</td>
                         <td>{stock.name}</td>
                         <td>{stock.qty}</td>
                         <td>{stock.avg.toFixed(2)}</td>
                        <td>{stock.price.toFixed(2)}</td>
                        <td className={profClass}>
                         {(curValue - stock.avg * stock.qty).toFixed(2)}
                       </td>
                        <td className={dayClass}>{stock.day}</td>
                      </tr>)
})}
   
     </table>
    </>
  )
}
