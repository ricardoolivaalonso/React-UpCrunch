import { PlansCardComponent } from '../03-components/PlansCardComponent';
import { SubtitleElement } from '../04-elements/SubtitleElement';

let PlansSection = ({plansItem, pt}) => {
    return (
        <section className={`plans ${pt}`}>

            <SubtitleElement ct="plans__main-title">
                Find your perfect funding
                <a className="plans__main-button" href="#placeholder">Learn More</a>
            </SubtitleElement>

            <div className="plans__item plans__item--title">
                <p className="plans__title">FUNDING PRODUCT</p>
                <p className="plans__title">FUNDING CAPACITY</p>
                <p className="plans__title">TERM</p>
                <p className="plans__title">TURNAROUND</p>
            </div>
            <div className="plans__list">
            {
                plansItem.map(i => (
                    <PlansCardComponent
                        key={i.id}
                        image={i.image}
                        productTitle={i.productTitle}
                        productDescription={i.productDescription}
                        capacity={i.capacity}
                        term={i.term}
                        turnaround={i.turnaround}
                    />
                    ))
            }
            </div>
        </section>
    );
}

export { PlansSection }