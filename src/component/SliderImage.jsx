import React, { useState } from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { banner_Image1 } from "../lib/utils";
import { banner_Image2 } from "../lib/utils";
import { banner_Image3 } from "../lib/utils";
import { banner_Image4 } from "../lib/utils";
import { banner_Image5 } from "../lib/utils";
import { banner_Image6 } from "../lib/utils";
import { banner_Image7 } from "../lib/utils";

function SliderImage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container-fluid">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner_Image1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner_Image2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner_Image6}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner_Image4}
                        alt="Four slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner_Image5}
                        alt="five slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner_Image7}
                        alt="six slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default SliderImage 