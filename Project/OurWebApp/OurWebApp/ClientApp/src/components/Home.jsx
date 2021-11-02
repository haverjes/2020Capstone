import React, { Component } from 'react';

import SplashPageCarousel  from './SplashPageCarousel';
import { Container, Row, Col } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

render () {
    return (
        <div>
        <Container>
            <Row>
                <h1>Welcome</h1>
                </Row>
            <Row>
                Please log in using either Google or Facebook.  Then you can access your tickets in the Customer item from the menu above.
            </Row>
            <Row>
                
            </Row>
        </Container>

        {/*  Note
          * There was an issue with putting the carousel into the container.  
          * SPC specifies dimensions in the <img> tag, but Container seems to override it and returns
          * the image to regular size after a second.  We need to keep this in mind when specifying image dimensions.
          */
        }
            <SplashPageCarousel />

        </div>
    );
}
}
