import star from "../images/star.jpg"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-image" />
            <div className="card-stats" >
                <img src={star} className="card-star" />
                <span className="bold">{props.rate}</span>
                <span className="gray">({props.review})</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}
