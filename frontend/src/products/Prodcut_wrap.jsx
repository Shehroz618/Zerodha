import ProductHero from "./Hero"
import {ProductLeftImg,ProductLeftImgTwo,ProductLeftImgThree} from "./Leftimage"
import {ProductRightImg,ProductRightImgTwo} from "./Rightimage"
import Partner from './Partners'
export default function ProductsWrap(){
   return(
    <>
       <ProductHero />
       <ProductLeftImg/>
       <ProductRightImg/>
       <ProductLeftImgTwo/>
       <ProductRightImgTwo/>
       <ProductLeftImgThree/>
       <Partner/>
    </>
   )
}