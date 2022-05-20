/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

import star from "../images/star.jpg"

export default function Card(props) {
    return (
        <div className="card">
            {props.item.openspots === 0 && <div className="card-badge">SOLD OUT</div>}
            <img src={props.item.coverImg} className="card-image" alt="Card Cover"/>
            <div className="card-stats" >
                <img src={star} className="card-star" alt="A mini pink star"/>
                <span className="card-rate bold">{props.item.stats.rating}</span>
                <span className="card-review gray">({props.item.stats.reviewCount})</span>
                <span className="card-location gray">• {props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p classname="card-price"><span className="bold">From ${props.item.price}</span> / {props.item.pricedetail}</p>
            {props.item.online === true && <p className="card-online">• Online</p>}
        </div>
    );
}
