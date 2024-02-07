import { fadeIn } from "../animation/GlobalAnimations";
import Translatable from "../translatable_text/Translatable";
import CategorySlider from "./CategorySlider";
import { Col, Row, Container} from "react-bootstrap";
import { motion } from 'framer-motion'
// import bgImg from 'src/assets/backgrounds/home-marketing-agency-bg-img-05.webp'
export default function MasterCategory() {
  return (
    <section 
      // style={{ backgroundImage: `url(${bgImg}`}}
      className={` cover-background w-screen min-h-[120vh] flex items-center justify-center bg-[#251626] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px] overflow-hidden`}
    >

      <Container fluid>
        <div className="">
        <Container>
          <motion.div {...fadeIn} className="flex gap-10 justify-between h-[250px]">
              <Col lg={6} sm={12} className=" md:mb-[40px] sm:mb[15px] xs:mb-[20px]">
                <h2 className="heading-5 font-serif leading-[3rem] font-semibold lg:w-full text-white">
                  <Translatable>
                  Discover endless stories in travel, redefine adventure, create memories
                  </Translatable>
                </h2>
              </Col>
              <Col lg={6} sm={12}>
                <Row sm={12} xs={1} className="gap-y-10">
                  <Col className="xs:text-center">
                    <span className="font-serif font-medium text-xl mb-[10px] block xs:mb-[5px] text-white">
                      <Translatable>
                        Tourism authority vision
                      </Translatable>
                    </span>
                    <p className="w-[85%] lg:w-full xs:w-[75%] text-lg sm:mx-auto text-white">
                      <Translatable>
                        The tourism sector is considered one of the key pillars in achieving the Kingdom's Vision 2030, encompassing all its branches. The authority aims to support the growth of the travel and tourism sector by meeting the needs of tourism companies and other business partners
                      </Translatable>
                    </p>
                  </Col>
                </Row>
              </Col>
            </motion.div>
        </Container>

          <CategorySlider
            carousalOption={{
              slidesPerView: "auto",
              loop: true,
              centeredSlides: true,
              navigation: false,
              spaceBetween: 60,
              autoplay: { delay: 4500, disableOnInteraction: false },
              breakpoints: { 991: { slidesPerView: 2 }, 767: { slidesPerView: 1 } }
            }}
          />
        </div>
      </Container>
    </section>

  )
}
