import React, {useState} from 'react';
import Item from './Item.jsx';
import $ from 'jquery';
 
// this component renders all the items in the carousel and controls the scrolling logic
// ! solve logic problem with the buttons working both directions when at 0 or 2
const ItemCarousel = (props) => {

    // array of all the items within the current carousel
    let itemArray = Array.from(props.data);
    // only grab 9 items from the carousel so we don't have straglers when you scroll
    itemArray = itemArray.slice(0, 9);

    // variable to set the current index within the carousel 
    // needed to track when position the carousel is in
    const [index, setIndex] = useState(1);
    var scrollIndex = index;

    // needed to control the state of the items for potential future finctionality
    const [carouselData, setCarouselData] = useState(itemArray);

    // array needed to control where the slider scrolls based on the index
    const spot = [0, 1065, 2130];
    // set position of the current set of items
    const [scroll, setScroll] = useState(spot[1]);
    
//========================================================================
// functions for controlling the arrow buttons on the side of the carousel
//========================================================================
    const nextItems = () => {

        // there is no scrollRight in case you are wondering why I only use scrollLeft
        // this move the carousel to the position within the 'spot' array
        $(".carouselList").animate({scrollLeft: scroll});

        scrollIndex++;
    
        if(scrollIndex > 2) {
    
            scrollIndex = 1;
        }
    
        setScroll(spot[scrollIndex]);
        console.log('index value 1', scrollIndex);
        
        setIndex(scrollIndex);
        console.log('scroll value', scroll);
    }

    const previousItems = () => {

        scrollIndex--;
        
        if(scrollIndex < 0) {
            
            scrollIndex = 1;

        } 
        setScroll(spot[scrollIndex]);
        console.log('index value 1', scrollIndex);

        setIndex(scrollIndex);
        console.log('scroll value', scroll);

        $(".carouselList").animate({scrollLeft: scroll});

    }

    return (
        <div className="carouselWrapper">
            <div className="carouselContent">
                <div className="carouselHeader">
                    <h2 className="peopleViewed">People also viewed<span className="xItems">{'(' + carouselData.length + ')'}</span></h2>
                </div>
                <div className="bottomLine"></div>
                    {/* this creates the arrow for the scroll button */}
                    <button className="previousButton" onClick={() => previousItems()}>
                        <svg className="svgLeft"><path className="pathLeft"></path></svg>
                    </button>
                <div className="ulWrapper">
                    <ul className="carouselList">
                    {carouselData.map((item, i) => {
                        return (

                            <Item key={i} data={item} rating={item.customer_review_AVG} getId={props.getId} />
                        )
                    })}
                    </ul>
                </div>
                    {/* this creates the arrow for the scroll button */}
                    <button id="next" className="nextButton" onClick={() => nextItems()}>
                        <svg className="svgRight"><path className="pathRight"></path></svg>
                    </button>
            </div>
        </div>
    )
}

export default ItemCarousel;
