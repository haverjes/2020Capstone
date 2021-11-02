import React, { useState, Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function getSlideShowImage(imageNumber) {
    return (
        <img
            className="d-block w-100"
            src={require('../assets/img/scenery/image' + imageNumber + '.jpg')}
            alt="Something"
            style={{ width: 640, height: 427 }}
        />
    );
}

const SplashPageCarousel = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* Carousel scales to whatever image you give it unless you specify dimensions. */}
            <Carousel>
                <Carousel.Item>
                    {getSlideShowImage(1)}
                    <Carousel.Caption>
                        <h3>Costs</h3>
                        <p>We hide the real cost of doing business under pretty pictures using bad contrast.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {getSlideShowImage(4)}

                    <Carousel.Caption>
                        <h3>Freedom</h3>
                        <p>Experience roadside assistance freedom in ways using vague indescribable terms.  But you feel better for reading them.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    {getSlideShowImage(5)}
                    <Carousel.Caption>
                        <h3>Never Alone</h3>
                        <p>All of us matter, each and every voice.  And if you have several voices, even this empty sky can be shared with dear friends.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../assets/img/Gravity.png')}
                        alt="Something"
                        style={{ width: 640, height: 427 }} />
                    <Carousel.Caption>
                        <h3>Our Competitors</h3>
                        <p>Don't you think things would look different if everyone you've been with starting by consulting quotes?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default SplashPageCarousel;