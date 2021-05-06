import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion"

let FadeScrollComponent = ({ children }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: .25,
    })
  
    useEffect(() => {
        if (inView) {controls.start("visible")}
    }, [controls, inView])
  
    return (
        <motion.div
            ref={ref}
            animate={ controls} 
            initial="hidden"
            transition={{ duration: .25, delay: .65 }}
            variants={{
                visible: { opacity: 1, scale: 1, y: 0  },
                hidden: { opacity: 0, scale: .985, y: 50 },
            }}
        >
            {children}
        </motion.div>
    )
}

export { FadeScrollComponent }