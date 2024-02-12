import Rescard from "./Rescard";
import { useState } from "react"
import resList from "../utils/mockdata";

//Body Component
const BodyComponent= () =>{
    const [listofRestaurants,setlistofRestaurants]=useState(resList);
    return (
        <div className="container">
            <div>
                {console.log(listofRestaurants)}
                <button className="btn-filter" onClick={() => {
                    filteredres=listofRestaurants.filter((res) => res.info.avgRating>4.2);
                    setlistofRestaurants(filteredres);
                }}>Top Rated Restaurants </button>
            </div>
            <div className="res-wrap">
            <div className="res-container">
                {
                    listofRestaurants.map( (restaurant)  =>  (
                        <Rescard key={restaurant.info.id} resData={restaurant} /> // returning JSX inside map by looping over restraunts
                    ) )
                }
            </div>
            </div>
        </div>
        
    )
}
export default BodyComponent;