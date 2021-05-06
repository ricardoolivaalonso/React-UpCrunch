import HeroBg from '../../img/heroalt.png';
import { TitleElement } from '../04-elements/TitleElement';

let HeroAltSection = () => {

    return(
        <section className="hero hero--alt">
            <div className="hero-lc hero-lc--alt">
                <TitleElement ct="hero__title">You’re busy running a business.</TitleElement>
                <p className="hero__description">Who has time to learn the ins & outs of lending?</p>
            </div>
            <div className="hero-rc hero-rc--alt">
                <img src={HeroBg} alt="placeholder" className="hero__bg" />
            </div>
        </section >
    )
}

export { HeroAltSection }