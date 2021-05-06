import { FadeScrollComponent } from "../00-helpers/FadeScrollComponent"

let SummaryCardComponent = ({ title, image, description }) => {
    return (
        <FadeScrollComponent>
            <article className="summary__card" tabIndex="0">
                <div className="summary__icon-c">
                    <img src={image} alt="placeholder" className="summary__icon" />
                </div>
                <h4 className="summary__title">{title}</h4>
                <p className="summary__description">{description}</p>
            </article>
        </FadeScrollComponent>
    );
}

export { SummaryCardComponent  }
