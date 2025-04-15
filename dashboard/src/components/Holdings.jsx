// import React, { useState, useEffect } from "react";
// import axios, { all } from "axios";
// import { VerticalGraph } from "./VerticalGraph";

// import { holdings } from "../data/data";

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);

//   // useEffect(() => {
//   //   axios.get("http://localhost:3002/allHoldings").then((res) => {
//   //     // console.log(res.data);
//   //     setAllHoldings(res.data);
//   //   })
//   //   .cath((err)=>{
//   //     console.log("Error fetching data",err)
//   //   })
//   // }, []);

//   // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   const labels = allHoldings.map((subArray) => subArray["name"]);

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Stock Price",
  //       data: allHoldings.map((stock) => stock.price),
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //   ],
  // };

  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

//   return (
//     <>
//       <h3 className="title">Holdings ({holdings.length})</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg. cost</th>
//             <th>LTP</th>
//             <th>Cur. val</th>
//             <th>P&L</th>
//             <th>Net chg.</th>
//             <th>Day chg.</th>
//           </tr>

//           {allHoldings.map((stock, index) => {
//             const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";

//             return (
//               <tr key={index}>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td>{curValue.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={profClass}>{stock.net}</td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>

//       <div className="row">
//         <div className="col">
//           <h5>
//             29,875.<span>55</span>{" "}
//           </h5>
//           <p>Total investment</p>
//         </div>
//         <div className="col">
//           <h5>
//             31,428.<span>95</span>{" "}
//           </h5>
//           <p>Current value</p>
//         </div>
//         <div className="col">
//           <h5>1,553.40 (+5.20%)</h5>
//           <p>P&L</p>
//         </div>
//       </div>
//       <VerticalGraph data={data} />
//     </>
//   );
// };

// export default Holdings;


import { holdings } from "../data/data"
import { VerticalGraph } from "./VerticalGraph";
export default function Holdings(){

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // const labels = holdings.map((holding) => holding.name);

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Stock Price",
  //       data: holdings.map((stock) => stock.price),
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => Math.floor(Math.random() * 1000)), // Simulate random data for Dataset 2
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

 // Create labels from the holdings data (e.g., names of stocks)
//  const labels = holdings.map((holding) => holding.name);

 // Prepare the data for the chart
//  const data = {
//    labels: labels, // Use the holding names as labels
//    datasets: [
//      {
//        label: 'Stock Prices',
//        data: holdings.map((holding) => holding.price), // Map the stock prices for the data points
//        backgroundColor: [
//          'rgba(255, 99, 132, 0.2)',
//          'rgba(255, 159, 64, 0.2)',
//          'rgba(255, 205, 86, 0.2)',
//          'rgba(75, 192, 192, 0.2)',
//          'rgba(54, 162, 235, 0.2)',
//          'rgba(153, 102, 255, 0.2)',
//          'rgba(201, 203, 207, 0.2)'
//        ],
//        borderColor: [
//          'rgb(255, 99, 132)',
//          'rgb(255, 159, 64)',
//          'rgb(255, 205, 86)',
//          'rgb(75, 192, 192)',
//          'rgb(54, 162, 235)',
//          'rgb(153, 102, 255)',
//          'rgb(201, 203, 207)'
//        ],
//        borderWidth: 1
//      }
//    ],
//  };
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = holdings.map((holding)=>holding.name)
const data = {
  labels: labels,
  datasets: [ {
    label: "Stock Price",
    data: holdings.map((stock)=>stock.price),
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
}]
}

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };


  return(
    <>
       <h3>We've {holdings.length} holdings</h3>
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
</table>

<div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <h2>29,875</h2>
            <span>55</span>
            <p>Total Investment</p>
          </div>
          <div className="col-4">
            <h2>31,428</h2>
            <span>95</span>
            <p>Curr Value</p>
          </div>
          <div className="col-4">
            <h2>1,553.40(+5.20%)</h2>
            
            <p>P & L</p>
          </div>
   
      </div>
      <div className="row"> ss
              <h5 className="text-center">Holdings</h5>
              <button >Stock Price</button>
            </div>
      </div>

      <VerticalGraph data={data} />
  
     </>
    
  )
}