import Card from "./Card"
import data from "../Data"

export default function Cards() {
    const items = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className="cards">
            {items}
        </div>
    )

}