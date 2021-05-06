import { FeaturesCardComponent } from '../03-components/FeaturesCardComponent';
import { TitleElement } from '../04-elements/TitleElement';

let FeaturesSection = ({featuresItem, ft, fc}) => {
    return (
        <section className={`features ${fc}`}>
            <div className="features-lc">
                <TitleElement ct="features__main-title">{ft}</TitleElement>
            </div>
            <div className="features-rc">
                {
                    featuresItem.map(i => (
                        <FeaturesCardComponent
                            key={i.id}
                            image={i.image}
                            title={i.title}
                            description={i.description}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export { FeaturesSection }