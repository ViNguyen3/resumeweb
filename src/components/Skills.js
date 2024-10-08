import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };   
    
    return (
        <section className="skill" id="skills">
            <Container> 
                 <Row>  
                    <Col>
                        <div className="skill-bx">   
                            <h2>    
                                Skills
                            </h2>
                            <p> 
                                I can use mutliple coding languages, familiar with many technology and frameworks. I also utilize software design principlesd like SOLID for my senior project with my team. Most importantly, I always strive to better my craft, hence I constantly practicing with new tools and framework that are popular. 
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image"></img>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"></img>
                                    <h5>AI/ML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"></img>
                                    <h5>Cloud Engineering</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image"></img>
                                    <h5>Full Stack Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                 </Row>
            </Container>
            <img src={colorSharp} className="background-image-left"></img>
        </section>
    )

}