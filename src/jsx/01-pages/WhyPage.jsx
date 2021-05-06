import { HeroAltSection } from '../02-sections/HeroAltSection'
import { SummarySection } from '../02-sections/SummarySection'
import { FeaturesSection } from '../02-sections/FeaturesSection'
import { TestimonialsSection } from '../02-sections/TestimonialsSection'
import { IdeasSection } from '../02-sections/IdeasSection'
import { CallSection } from '../02-sections/CallSection'
import { summaryItem, testimonialItem, featuresItem, ideasSection } from './WhyPageData'
import MetaTags from 'react-meta-tags'
import { motion } from "framer-motion"

let WhyPage = () => {
    return(
        <>
            <MetaTags><title>Why</title></MetaTags>
            <motion.div className="motion-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition= {{ duration: .5 }}
            > 
                <HeroAltSection />
                <SummarySection summaryItem={summaryItem}/>
                <TestimonialsSection testimonialItem={testimonialItem}/>
                <FeaturesSection featuresItem={featuresItem} ft={`Our calculated approach saves you time... and mistakes.`} fc={'features--alt'}/>
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

export { WhyPage }