import { PlansSection } from '../02-sections/PlansSection'
import { plansItem } from './ProductPageData'
import MetaTags from 'react-meta-tags'
import { motion } from "framer-motion"

let ProductPage = () => { 
    return(
        <>
            <MetaTags><title>Product</title></MetaTags>
            <motion.div className="motion-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition= {{ duration: .5 }}
            > 
                <PlansSection plansItem={ plansItem } pt={'plans--alt'} />
            </motion.div>
        </>
    )
 }     

export { ProductPage }
