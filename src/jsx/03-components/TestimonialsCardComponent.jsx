import TestimonialsStar from '../../img/testimonials-icon-1.png'
import { SubtitleElement } from '../04-elements/SubtitleElement'
import { FadeScrollComponent } from '../00-helpers/FadeScrollComponent'

let TestimonialsCardComponent = ({ intro, description, author }) => {
    return (
        <FadeScrollComponent>
            <article className="testimonials__item" tabIndex="0">
                <div className="testimonials__ranking">
                {
                    [...Array(5).keys()].map( i => <img key={i} src={TestimonialsStar} alt="placeholder" className="testimonials__star"/>)
                }                    
                </div>

                <SubtitleElement ct="testimonials__intro">{intro}</SubtitleElement>

                <p className="testimonials__description">{description}</p>
                <span className="testimonials__author">{author}</span>
            </article>
        </FadeScrollComponent>
    );
}

export { TestimonialsCardComponent }
