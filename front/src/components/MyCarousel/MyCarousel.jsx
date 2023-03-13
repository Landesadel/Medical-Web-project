import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {NavLink} from "react-router-dom";

const MyCarousel = ({data,height,captionStyle,linkStyle}) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item key={i} className={height}>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt="slider image"
                        />
                        <Carousel.Caption>
                            <h3 className={captionStyle}>{slide.caption}</h3>
                            <NavLink to="/login" className={linkStyle}>{slide.description}</NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
};

export default MyCarousel;