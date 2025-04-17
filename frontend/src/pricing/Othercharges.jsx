const tableStyle ={
    textAlign:'center',
    padding:"10px"
}
export default function Othercharges(){
    return(
        <>
        <div className="container">
            <h2 className="mb-4 mt-5">Charges for optional value added services</h2>
        
            
            <div className="row mt-2">
            <div className="table-container">
            <table className="table table-bordered" >
                    <thead className="table-bordered">
                          <tr style={tableStyle}><td>Service</td>
                          <td style={tableStyle} >Billing Frquency</td>
                          <td style={tableStyle}>Charges</td>
                          </tr>
                    </thead>

                    <tbody>
                        <tr  style={tableStyle}><td>Tickertape</td>
                        <td style={tableStyle}>Monthly / Annual</td>
                        <td style={tableStyle}>Free: 0 | Pro: 249/2399</td> 
                        </tr>
                        <tr  style={tableStyle}><td>Smallcase</td>
                        <td style={tableStyle}>Per transaction</td>
                        <td style={tableStyle}>Buy & Invest More: 100 | SIP: 10</td> 
                        </tr>
                    </tbody>
                    </table>  
            </div>
           
            </div>
        </div>
        </>
    )
}