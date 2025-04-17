
import HomeOpenAccount from "./Openacc";
import HomePartner from "./Partner";
import HomePricing from "./Pricing";
import HeroSection from "./Hero";
import Navbar from "../Navbar";
import FooterSection from "../Footer";

export default function HomeWrapper(){
    return(
        <>
      
       <HeroSection />
       
       <HomePartner />
       <HomeOpenAccount />
       <HomePricing />
       <FooterSection />

        </>
    )
}