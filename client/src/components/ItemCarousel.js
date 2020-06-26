import React, {useState} from 'react';
import Item from './Item';
 
const ItemCarousel = (props) => {

    // index variable for helping to control what items are currently being viewed
    let itemArray = Array.from(props.data);

    const [index, setIndex] = useState(0);
    const [endex, setEndex] = useState(3);
    const [carouselData, setCarouselData] = useState(itemArray.slice(index, endex));

//========================================================================
// functions for controlling the arrow buttons on the side of the carousel
//========================================================================
    const nextItems = () => {
        
        if (endex <= 97) {
            setIndex(index + 3);
            setEndex(endex + 3);
        }
        setCarouselData(itemArray.slice(index, endex));
    }

    const previousItems = () => {

        if (index >= 3) {
            setIndex(index - 3);
            setEndex(endex - 3);
        }
        setCarouselData(itemArray.slice(index, endex));
    }

    return (
        <div className="carouselWrapper">
            <div className="carouselContent">
                <div className="carouselHeader">
                    <h2>People also viewed<span className="xItems">(15 items)</span></h2>
                </div>
                <div className="bottomLine"></div>
                    <button className="previousButton" onClick={() => previousItems(3)}>
                        <svg className="svgLeft"><path className="pathLeft"></path></svg>
                    </button>
                <div className="ulWrapper">
                    <ul className="carouselList">
                        {carouselData.map((item, i) => {
                            return (

                                <Item key={i} data={item}/>
                            )
                        })}
                    </ul>
                </div>
                    <button className="nextButton" onClick={() => nextItems(3)}>
                        <svg className="svgRight"><path className="pathRight"></path></svg>
                    </button>
            </div>
        </div>
    )
}

export default ItemCarousel;