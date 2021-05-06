import TestimonialsIcon from '../../img/testimonials-icon-2.png'
import { TestimonialsCardComponent } from '../03-components/TestimonialsCardComponent'

const TestimonialsSection = ({testimonialItem}) => {
    return (
        <div className="testimonials-mc">
            <section className="testimonials">
                <div className="testimonials-lc">
                    <img src={TestimonialsIcon} alt="placeholder" className="testimonials__main-icon" />
                    <p className="testimonials__main-description">
                        The results speak for themselves, see our reviews from <span>TrustPilot.</span>
                    </p>
                    <a href="#placeholder" className="testimonials__main-link">See all Reviews</a>
                </div>
                <div className="testimonials-rc">
                    {
                        testimonialItem.map(i => (
                            <TestimonialsCardComponent
                                key={i.id}
                                intro={i.intro}
                                description={i.description}
                                author={i.author}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
       
    );
}

export { TestimonialsSection }