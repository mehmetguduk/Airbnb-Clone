/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

import imagegrid from "../images/image-grid.jpg"

export default function Hero() {
    return (
        <section className="hero"> 
            <img src={imagegrid} className="hero-image" alt="Hero Cover"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )

}