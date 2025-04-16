import Restaurentcard from "./Restaurentcard"
import restaurants from "../config/data"
function Body() {


    return (
        <div className="res-card-container">
            {
                restaurants.map((resList) => (<Restaurentcard resData={resList} />))
            }
        </div>
    )

}

export default Body