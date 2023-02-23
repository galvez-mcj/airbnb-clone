import star from '../assets/star.png'

function Card(props) {
    let badgeText = ""
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.openSpots < 5) {
        badgeText = "HURRY! FEW SLOTS LEFT"
    }
    return (
        <div className="card-container">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../src/assets/${props.coverImg}`} alt="Cover Image" className="card-img" />
            <div className="card-stats">
                <img src={star} className="card-star" alt="star icon"/>
                <span>{props.stats.rating}&nbsp;</span>
                <span className="gray">({props.stats.reviewCount})&nbsp;•&nbsp;</span>
                <span className="gray">{props.location}</span>
            </div>
            
            <p className="card-title">{props.title}</p>
            <p className="card-cost"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card