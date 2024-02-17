import { motion } from 'framer-motion'
import { Col, Row, Container} from "react-bootstrap";
import { fadeIn } from '../animation/GlobalAnimations'
import MsCategorySlider from './MsCategorySlider'
import './_textslider.scss'
import Translatable from '../translatable_text/Translatable';

export default function MsCategory() {
  return (
    <section>
      <Container>
          <motion.div {...fadeIn} className="flex gap-10 justify-between h-[200px]">
              <Col lg={6} sm={12} className=" md:mb-[20px] sm:mb[15px] xs:mb-[20px]">
                <h2 className=" text-4xl font-serif leading-[3rem] font-semibold lg:w-full ">
                  <Translatable>
                  Dall Web Services 
                  </Translatable>
                </h2>
              </Col>
              <Col lg={6} sm={12}>
                <Row sm={12} xs={1} className="gap-y-10">
                  <Col className="xs:text-center">
                    <p className="w-[85%] lg:w-full xs:w-[75%] text-lg sm:mx-auto ">
                      <Translatable>
                        A portal to assist decision-making leaders who seek to discover human capabilities and align them with roles that match their abilities, aiming for enhanced productivity and cost-effective, balanced expenditure in training and recruitment
                      </Translatable>
                    </p>
                  </Col>
                </Row>
              </Col>
            </motion.div>
        </Container>
      <motion.section {...fadeIn}>
          <Container className="px-0">
            <MsCategorySlider
              // data={TextSliderData}
              carousalOption={{
                // slidesPerView: 1,
                spaceBetween: 60,
                loop: true,
                centeredSlides: true,
                autoplay: { delay: 2500, disableOnInteraction: false, reverseDirection: true },
                breakpoints: { 992: { slidesPerView: 2 }, 767: { slidesPerView: 1 } }
              }} 
            />
          </Container>
        </motion.section>
    </section>
  )
}
