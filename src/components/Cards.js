import Card from "./Card"
import katie from "../images/katie.jpg"

export default function Cards() {
    return (
        <div className="cards">
            <Card
                img={katie}
                rate="5.0"
                review={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )

}