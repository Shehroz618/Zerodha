import HeroPricing from "./Hero"
import PricingTable from "./Pricingtable"
import ChargesExp from "./Chargesexplained"
import AccountCharges from "./Acccharges"
import Othercharges from "./Othercharges" 
export default function PricingWrap(){
    return(
        <>
        <HeroPricing/>
        <PricingTable/>
        <ChargesExp/>
        <AccountCharges/>
        <Othercharges/>
        </>
    )
}