import { HeroSection } from '../02-sections/HeroSection'
import { SummarySection } from '../02-sections/SummarySection'
import { FeaturesSection } from '../02-sections/FeaturesSection'
import { TestimonialsSection } from '../02-sections/TestimonialsSection'
import { PlansSection } from '../02-sections/PlansSection'
import { IdeasSection } from '../02-sections/IdeasSection'
import { CallSection } from '../02-sections/CallSection'
import { summaryItem, featuresItem, testimonialItem, plansItem, ideasSection } from './HomePageData'
import MetaTags from 'react-meta-tags'
import { motion } from "framer-motion"

let HomePage = () => {
    return (
        <>
            <MetaTags><title>Home</title></MetaTags>
            <motion.div className="motion-container" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition= {{ duration: .5 }}
            > 
                <HeroSection />
                <SummarySection summaryItem={ summaryItem } />
                <FeaturesSection featuresItem={ featuresItem } ft={ 'A smarter way to borrow' } />
                <TestimonialsSection testimonialItem={ testimonialItem } />
                <PlansSection plansItem={ plansItem } />
                <IdeasSection
                    img={ ideasSection.img }
                    title={ ideasSection.title }
                    description={ ideasSection.description }
                    link={ ideasSection.link }
                />
                <CallSection />
            </motion.div>

        </>
    )
}

export { HomePage }