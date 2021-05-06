import './../scss/styles.scss'
import { HeaderSection } from './02-sections/HeaderSection'
import { HomePage } from './01-pages/HomePage'
import { WhyPage } from './01-pages/WhyPage'
import { ProductPage } from './01-pages/ProductPage'
import { FooterSection } from './02-sections/FooterSection'

import { Route, Redirect, Switch, useLocation } from 'react-router-dom'
import { ScrollToTop } from './00-helpers/ScrollToTop'
import { AnimatePresence } from "framer-motion"
import MetaTags from 'react-meta-tags'
import Favicon from '../img/favicon.png'

let App = () =>{
    let location = useLocation()

    return(
        <>
            <MetaTags><link rel="shorcut icon" type="image/x-icon" href={Favicon}/></MetaTags>
            <ScrollToTop />
            <HeaderSection />
            <AnimatePresence exitBeforeEnter >
                <Switch location={location} key={location.key}>
                    <Route path="/" exact >
                        <HomePage />
                    </Route>
                    <Route path="/why" exact >
                        <WhyPage />
                    </Route>
                    <Route path="/product" exact >
                        <ProductPage />
                    </Route>
                    <Route>
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </AnimatePresence>
            <FooterSection />
        </>
    )
}

export default App;
