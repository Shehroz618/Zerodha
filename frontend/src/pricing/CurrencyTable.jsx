export default function CurrencyTable(){
    return(
        <>
         <table className="table table-bordered table-2">
          <thead>
            
            <tr><td></td> <td>Currency futures</td> <td>Currency options</td></tr>
          </thead>

          <tbody>
            
           
            <tr>
              <td>Brokerage</td>
              <td>0.03% or ₹ 20/executed order whichever is lower</td>
              <td>₹ 20/executed order</td>
                  
            </tr>
            <tr>
              <td>STT/CTT</td>
              <td>No STT</td>
              <td>No STT</td>
                  
            </tr>
            <tr>
              <td>Transaction <br /> charges</td>
              <td>NSE: 0.00035% <br />  
              BSE: 0.00045%</td>
              <td>NSE: 0.0311% <br /> 
              BSE: 0.001%</td>
                  
            </tr>
 
            <tr>
              <td>GST</td>
              <td> 	18% on (brokerage + SEBI charges + <br /> transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + <br /> transaction charges)</td>
                  
            </tr>

            <tr>
              <td>SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
                  
            </tr>
            <tr>
              <td>Stamp charges</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
                  
            </tr>

            
          </tbody>
        </table>
        </>
    )
}