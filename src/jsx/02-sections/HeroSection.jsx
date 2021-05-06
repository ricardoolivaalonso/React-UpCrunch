import HeroBg from '../../img/hero.png';
import { TitleElement } from '../04-elements/TitleElement';

let HeroSection = () => {
    
    let callSubmit = (e) => e.preventDefault() 

    return(
        <section className="hero">
            <div className="hero-lc">
                <TitleElement ct="hero__title">Outside-the-box funding that fits your unique business</TitleElement>

                <p className="hero__description">Bespoke lending designed to get you the capital you need to get ahead.</p>
                <form className="hero-form__input" onSubmit={callSubmit}>
                    <input type="text" className="hero-form__input" placeholder="How much could you see?" />
                    <button type="submit" className="hero-form__button">Get Started</button>
                </form>
            </div>
            <div className="hero-rc">
                <img src={HeroBg} alt="placeholder" className="hero__bg" />
            </div>
        </section >
    )
}

export { HeroSection }