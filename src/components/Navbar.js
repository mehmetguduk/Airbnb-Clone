/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

import airbnblogo from "../images/airbnb-logo.png"

export default function Navbar(){
    return(
        <nav>
            <img src={airbnblogo} className="airbnb-logo" alt="Airbnb Logo"/>
        </nav>
    )
}