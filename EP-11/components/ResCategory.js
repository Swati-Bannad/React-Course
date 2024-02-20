import { RES_URL } from "../utils/constants";
import { useState } from "react";

const ResCategory = (props) => {
    const {data} = props;

    return (
        <div className="accordian-container" >
            <div className="accordian-head">
                <span>{data.title} ({data?.itemCards?.length})</span>
                <span>⬇</span>
            </div>
            <div className="accordian-body">
                {data?.itemCards.map((item) => (
                    <div key={item.card.info.id}>
                        <div className="menu-deatil-box">
                            <h5>{item.card.info.name}</h5>
                            <p>Rs. {item.card.info.price/100 || item.card.info.defaultprice/100}</p>
                            <p>{item.card.info.description}</p>
                        </div>
                        <div className="menu-image-box">
                            <img src={RES_URL + item.card.info.imageId} />
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
export default ResCategory;