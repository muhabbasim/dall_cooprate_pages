import { Col, Container, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import { fadeIn } from '../animation/GlobalAnimations';
import './_iconwithtext.scss'
import IconWithText2 from './IconWithText2';
import backgroundImg from 'src/assets/backgrounds/home-marketing-agency-bg-img-05.webp'
import { Parallax } from 'react-parallax';
import Translatable from '../translatable_text/Translatable';

export default function SimpleCategory() {
  return (
    <Parallax 
      className="h-[120vh] flex items-center justify-center"
      strength={900}
      bgImage={backgroundImg}
    > 
    
      <Container>
        <Row className="justify-center">
          <motion.div className="col-xl-6 col-lg-7 col-sm-8 mb-20 text-center w-[51%] xl:mb-[70px] lg:mb-[65px] md:mb-[60px] sm:mb-[55px] md:w-[70%] xs:w-full" {...fadeIn}>
            <h1 className="inline-block font-serif text-4xl uppercase mb-[20px] font-bold bg-[#68726a] p-4 rounded-sm text-white xs:mb-[15px]">
              <Translatable>
                NISLAN contribution to Military Colleges
              </Translatable>
            </h1>
            <h6 className="w-full mb-[20px] font-semibold font-serif -tracking-[1px] text-white">
              <Translatable>
                The NISLAN service aimed at assisting universities in the processes of filtering and selecting military specializations for individuals
              </Translatable>
            </h6>
          </motion.div>
        </Row>
        <Row className="justify-center">
          <Col lg={12} md={9} xs={12}>
            <IconWithText2 grid="row-cols-1 row-cols-lg-2 gap-y-10 justify-center" theme="icon-with-text-02" animation={fadeIn} animationDelay={0.2} />
          </Col>
        </Row>
      </Container>
    </Parallax>
  )
}
