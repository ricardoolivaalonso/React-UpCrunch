import { FadeScrollComponent } from "../00-helpers/FadeScrollComponent"

let FeaturesCardComponent = ({ title, image, description }) => {
    return (
        <FadeScrollComponent>
            <article className="features__item" tabIndex="0">
                <img src={image} alt="placeholder" className="features__img" />
                <h4 className="features__title">{title}</h4>
                <p className="features__description">{description}</p>
            </article>
        </FadeScrollComponent>
    );
}

export { FeaturesCardComponent }