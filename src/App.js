/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <Cards/>
            <Footer/>
        </div>
    );
}