import airbnblogo from "../images/airbnb-logo.png"

export default function Navbar(){
    return(
        <nav>
            <img src={airbnblogo} className="airbnb-logo"/>
        </nav>
    )
}