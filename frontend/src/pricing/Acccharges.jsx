export default function AccountCharges() {
  return (
    <div className="container">
        <h2 className="mb-5 mt-5">Charges for account opening</h2>
        <div className="row">
            <div className="table-container " >
         <table className="table table-bordered px-4 w-100"  >
            <thead className="table-bordered">
                <tr><td>Type of account</td><td>Charges</td></tr>
             
                
            </thead>
         <tbody>
          <tr>

            <td>Online account</td>
            <td><a className="btn btn-success" href="#" role="button">FREE</a></td>
          </tr>
          <tr>
          
            <td>Offline account</td>
            <td><a className="btn btn-success" href="#" role="button">FREE</a></td>
           
          </tr>
          <tr>
            
            
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
            
          </tr>
          <tr>
            
            
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
            
          </tr>
         </tbody>
          </table>
         </div>
      </div>
    </div>
  );
}
