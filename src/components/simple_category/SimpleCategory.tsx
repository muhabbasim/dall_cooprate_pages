import { Container, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import { fadeIn } from '../animation/GlobalAnimations';
import './_iconwithtext.scss'
import "../Accordion/_accordion.scss"

import IconWithText2 from './IconWithText2';
// import backgroundImg from 'src/assets/backgrounds/home-marketing-agency-bg-img-05.webp'
// import { Parallax } from 'react-parallax';
// import Translatable from '../translatable_text/Translatable';
import Accordions from '../Accordion/Accordion';
import Translatable from '../translatable_text/Translatable';


const accordionData = [
  {
    icon: "",
    title: "King Abdulaziz Military College",
    img: 'https://www.mod.gov.sa/Sectors/PublishingImages/logo/logo_04.png',
    content: [
      {subCat: 'The Royal Saudi Land Forces'},
      {subCat: 'Intelligence'},
      {subCat: 'Saudi Royal Guard'},
    ],
  },
  {
    icon: "",
    title: "King Fahd Naval College",
    img: 'https://www.mod.gov.sa/Sectors/Arkan/Leaders/PublishingImages/RSNF%20LOGO-COLORED.png',
    content: [
      {subCat: 'The Royal Saudi Navy Forces'},
    ],
  },
  {
    icon: "",
    title: "King Faisal Air College",
    img: 'https://www.mod.gov.sa/aldifa/PublishingImages/%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A7%D9%84%D8%AC%D9%88%D9%8A%D8%A9-2.png',
    content: [
      {subCat: 'The Royal Suadi Air Force'},
    ],
  },
  {
    icon: "",
    title: "King Abdullah Air Defense College",
    img: 'https://www.mod.gov.sa/Sectors/PublishingImages/logo/logo_03.png',
    content: [
      {subCat: 'Strategic Missile Force'},
      {subCat: 'Royal Saudi Air Defense Forces'},
    ],
  },
]

export default function SimpleCategory() {
  return (
    
    <section className="p-0 overflow-hidden eventsconference-accordion">
      <Container fluid>
        <Row>
          <motion.div {...{ ...fadeIn, transition: { delay: 0.2 } }} className="cover-background md:h-[750px] sm:h-[400px] xs:h-[300px] col-xl-6 col-lg-5" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511989130945-c2b632959395?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}></motion.div>
          <motion.div {...{ ...fadeIn, transition: { delay: 0.3 } }} className="py-[9.5rem] px-[10.5rem] bg-[#241526] xl:p-20 md:p-28 xs:px-12 col-xl-6 col-lg-7">
            <span className="font-serif font-medium text-md text-green-600 uppercase tracking-[1px] block mb-[30px] xs:mb-[20px]">
              <Translatable>
                NISLAN contribution to Military Colleges
              </Translatable>
            </span>
            <h2 className="heading-6 font-serif font-medium text-white mb-[5.5rem] lg:mb-[4.5rem] tracking-[-1px] w-[90%] xl:w-full xs:mb-14">
              <Translatable>
                The NISLAN service aimed at assisting universities in the processes of filtering and selecting military specializations for individuals
              </Translatable>
            </h2>
            <Accordions data={accordionData} animation={fadeIn} />
          </motion.div>
        </Row>
      </Container>
    </section>

    // <Parallax 
    //   className="h-[120vh] flex items-center justify-center"
    //   strength={900}
    //   bgImage={backgroundImg}
    // > 
    
    //   <Container>
    //     <Row className="justify-center">
    //       <motion.div className="col-xl-6 col-lg-7 col-sm-8 mb-20 text-center w-[51%] xl:mb-[70px] lg:mb-[65px] md:mb-[60px] sm:mb-[55px] md:w-[70%] xs:w-full" {...fadeIn}>
    //         <h1 className="inline-block font-serif text-4xl uppercase mb-[20px] font-bold bg-[#68726a] p-4 rounded-sm text-white xs:mb-[15px]">
    //           <Translatable>
    //             NISLAN contribution to Military Colleges
    //           </Translatable>
    //         </h1>
    //         <h6 className="w-full mb-[20px] font-semibold font-serif -tracking-[1px] text-white">
    //           <Translatable>
    //             The NISLAN service aimed at assisting universities in the processes of filtering and selecting military specializations for individuals
    //           </Translatable>
    //         </h6>
    //       </motion.div>
    //     </Row>
    //     <Row className="justify-center">
    //       <Col lg={12} md={9} xs={12}>
    //         <IconWithText2 grid="row-cols-1 row-cols-lg-2 gap-y-10 justify-center" theme="icon-with-text-02" animation={fadeIn} animationDelay={0.2} />
    //       </Col>
    //     </Row>
    //   </Container>
    // </Parallax>
  )
}
