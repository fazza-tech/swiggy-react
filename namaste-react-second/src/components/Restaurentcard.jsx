
const Restaurentcard = (props) => {

    const {resData} = props
    const{
        name,
        avgRatingString,
        cuisines,areaName,
        cloudinaryImageId
        }=resData?.info
    return(
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />

            <h4>{name}</h4>
            <div className="avg-container">
                <img src=".\src\assets\avgRating.svg" alt="" />
                <h4>{avgRatingString} {resData.info.sla.deliveryTime} mins</h4>
            </div>
            
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            
        </div>
    )
}

export default Restaurentcard