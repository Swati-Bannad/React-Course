import Rescard from "./Rescard";
import { useState,useEffect } from "react"
import resList from "../utils/mockdata";
import Shimmer from "react";

//Body Component
const BodyComponent= () =>{
    const [listofRestaurants,setlistofRestaurants]=useState(resList);
    const [filteredlistofRestaurants,setfilteredlistofRestaurants]=useState(resList);
    const [searchText, setSearchText] = useState("");
    // useEffect(() => {
    //     fetchData();
    // }, []);
    // const fetchData = async () => {
    //     const data =await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9182761&lng=77.5612254&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json();   
    //     setlistofRestaurants(json?.data?.cards[2]?.data?.data.?card);  
    // }

    return listofRestaurants.length ===0 ? (<Shimmer />) : (
        <div className="container">
            <div className="filter">
                <div className="Searchbar">
                    <input type="text"  className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        const matchedres=listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredlistofRestaurants(matchedres);
                    }}>Search</button>
                </div>
                <button className="btn-filter" onClick={() => {
                    const filteredres=listofRestaurants.filter((res) => res.info.avgRating>4.2);
                    setfilteredlistofRestaurants(filteredres);
                }}>Filter Top Rated Restaurants </button>
            </div>
            <div className="res-wrap">
            <div className="res-container">
                {
                    filteredlistofRestaurants.map( (restaurant)  =>  (
                        <Rescard key={restaurant.info.id} resData={restaurant} /> // returning JSX inside map by looping over restraunts
                    ) )
                }
            </div>
            </div>
        </div>
        
    )
}
export default BodyComponent;