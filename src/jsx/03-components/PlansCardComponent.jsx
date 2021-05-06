import { FadeScrollComponent } from "../00-helpers/FadeScrollComponent"

let PlansCardComponent = ({ image, productTitle, productDescription, capacity, term, turnaround }) => {

    return (
        <FadeScrollComponent>
            <div className="plans__item" tabIndex="0">
                <img src={image} alt="placeholder" className="plans__icon" />
                <div className="plans__product">
                    <p className="plans__product-title">{productTitle}</p>
                    <p className="plans__product-description">{productDescription}</p>
                </div>
                <p className="plans__capacity">{capacity}</p>
                <p className="plans__term">{term}</p>
                <p className="plans__turnaround">{turnaround}</p>
            </div>
        </FadeScrollComponent>
    );
}

export { PlansCardComponent }