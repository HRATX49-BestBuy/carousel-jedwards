import React, {useState} from 'react';
import Star from './Star';

const Item = (props) => {

    const [stars, setStars] = useState(props.data.customerReviewAverage);

    return (

        <div className="itemContainer">
            <div className="itemBlock">

                <div className="image">
                    <img className="itemImage" src={props.data.image}></img>
                </div>

                <div className="name">
                    <p className="itemName">{props.data.name}</p>
                </div>

                <ul className="review">
                    <Star rating={props.data.customerReviewAverage}/>
                </ul>

                <div className="price">
                    <span className="itemPrice">{props.data.regularPrice}</span>
                </div>

                <div type="compare">
                    <label className="checkbox">
                        <input type="checkbox"></input>
                        <span></span>
                    </label>
                </div>

            </div>
        </div>
    )
}

export default Item;
