import { Col, Row, Container} from "react-bootstrap";
import { motion } from 'framer-motion'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { fadeIn } from "../animation/GlobalAnimations";
import { DataProps } from "src/data/DataProps";
// import Translatable from "../translatable_text/Translatable";
// import { useSelector } from "src/store/Store";
// import { cn } from "src/lib/utils";

// import Buttons from "../Button/Buttons";
import IconWithText from "../features/IconWithText/IconWithText";
import Translatable from "../translatable_text/Translatable";
// import { Container } from "@mui/material";

type Props = {
  data: DataProps;
  options?: boolean;
}

export default function Definition({ data, options }: Props) {
  return (
    <div>  
      <motion.section 
        style={{
          backgroundImage: `url('src/assets/backgrounds/home-freelancer-img-06.webp')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top'
        }} 
        className="overflow-visible py-[6rem] relative" {...fadeIn}
      >
        <Container>
          <Container>
            { options && <Row className=" md:absolute md:pt-0 top-[-60px] left-[10%] right-[10%] items-center justify-center">
              <Col xs={12} sm={9} lg={12} md={12}>
                <IconWithText sponsorship={data?.features?.sponsorship_data} grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center gap-y-10 z-10 relative" className="rounded-[4px] flex" theme="icon-with-text-04" />
              </Col>
            </Row>}
          </Container>
            <Row gx={4} gy={4} className="gap-10x">
                <Col xl={6} lg={6}  className="flex justify-center items-center md:h-[500px] sm:h-[350px] ">
                  <motion.div {...fadeIn} className="h-full w-full overflow-hidden rounded-xl bg-slate-600">
                    <img src={data?.definition?.def_img} alt="image" className="h-full w-full object-cover" />
                  </motion.div>
                </Col>
                <Col xl={6} lg={6} className="bg-[#232323]x flex flex-col justify-center">
                  <motion.span {...fadeIn} className="font-serifx font-medium text-[#e6994e] tracking-[2px] uppercase block mb-[35px]">
                    <Translatable>
                      {data?.definition?.def_title}
                    </Translatable>
                  </motion.span>
                  <motion.h2 {...{ ...fadeIn, transition: { delay: 0.4 } }} className="heading-4 font-serifx font-semibold text-whitex -tracking-[.5px] mb-12 w-[90%] sm:w-full">
                    <Translatable>
                      {data?.definition?.def_title2}
                    </Translatable>
                  </motion.h2>
                  <motion.p {...{ ...fadeIn, transition: { delay: 0.6 } }} className="text-lg leading-[38px] mb-[42px] w-[90%] lg:w-full md:w-[80%] sm:w-full md:text-xmd">
                    <Translatable>
                      {data?.definition?.def_cta}
                    </Translatable>
                  </motion.p>
                  {/* <a target="_blank" href="https://dall-in.com/auth/login">
                    <motion.a {...{ ...fadeIn, transition: { delay: 0.8 } }}>
                      <Buttons className="font-medium font-serifx uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-white hover:text-white tracking-[1px]" size="xl" color="#fff" title={<Translatable>Start know</Translatable>}/>
                    </motion.a>
                  </a> */}
                </Col>
            </Row>
        </Container>
      </motion.section>
    </div>
  )
}
