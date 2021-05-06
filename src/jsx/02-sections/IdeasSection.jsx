import { TitleElement } from '../04-elements/TitleElement';

let IdeasSection = ({img, title, description, link}) => {
    return (    
        <div className="ideas-mc">
            <section className="ideas">
                <img src={img} alt="placeholder" className="ideas__icon" />
                <TitleElement ct="ideas__title">{title}</TitleElement>
                <p className="ideas__description">{description}</p>
                <a href="#placeholder" className="ideas__link">{link}</a>
            </section>
        </div>
    );
}

export { IdeasSection }