import { SummaryCardComponent } from '../03-components/SummaryCardComponent';
import SummaryRating from '../../img/summary-icon-1.png';
import SummaryStar from '../../img/summary-icon-2.png';

let SummarySection = ({summaryItem}) => {
    return(
        <div className="summary-mc">
            <section className="summary" >
                <div className="summary-lc">
                    {
                        summaryItem.map(i => (
                            <SummaryCardComponent
                                key={i.id}
                                id={i.id}
                                image={i.image}
                                title={i.title}
                                description={i.description}
                            />
                        ))
                    }
                </div>
                <div className="summary-rc">
                    <div className="summary__rating">
                        <img src={SummaryRating} alt="placeholder" className="summary__rating-icon" />
                        <p className="summary__rating-title">A+ Rating</p>
                    </div>
                    <div className="summary__star">
                        <p className="summary__star-title">TrustPilot</p>
                        {
                            [...Array(5).keys()].map( i => <img key={i} src={SummaryStar} alt="placeholder" className="summary__star-icon" />)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export { SummarySection }