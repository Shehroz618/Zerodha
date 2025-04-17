import { useState } from "react";
import { Link } from "react-router-dom";
import EquityTable from "./EquityTable";
import CurrencyTable from "./CurrencyTable";
import CommodityTable from "./CommoddityTable";
export default function PricingTable() {
 
  const[activeTab,setActivetab] = useState('equity');

  const handleTab = (tabName)=>{
    setActivetab(tabName)
  }
  return (
    <>
      <div className="container">
        <div className="row">

     
       
       <div className="table-heading d-flex gap-5 ">
       <Link className="text-decoration-none fs-4" to="#tab-equity" onClick={()=>handleTab('equity') }>Equity</Link>
       
          
       <Link className="text-decoration-none fs-4" to="#tab-currency " aria-label="Go to Currency table" onClick={()=>handleTab('currency')}>Currency</Link>
     
    
       <Link className="text-decoration-none fs-4" to="#tab-commodity" onClick={()=>handleTab('commodity')}>Commodity</Link>
       </div>
          
          
        
        <hr className="mt-2 mb-4"/>

      {activeTab === 'equity' && (
       <EquityTable/>
       )}

{activeTab === 'currency' && (
        <CurrencyTable/> )}
        
{activeTab === 'commodity' &&(
      <CommodityTable/>
)}
        <h3 className="text-center mt-5 fs-5 text-muted">
          Calculate your costs upfront using our brokerage calculator
        </h3>
        </div>
      </div>
    </>
  );
}
