import { Col, Container, Row, } from "react-bootstrap";
import InteractiveBanners from "./InteractiveBanners";
import { motion } from 'framer-motion'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { fadeIn } from "../animation/GlobalAnimations";
import { DataProps } from "src/data/DataProps";
import Translatable from "../translatable_text/Translatable";
import { useSelector } from "src/store/Store";
import { cn } from "src/lib/utils";
import { useQuery } from "@tanstack/react-query";
import api from "src/context/apiRequest";


const selectedJobs = [
  "Transportation specialist",
  "Tour guide",
  "Communication engineer",
  "Photojournalist",
  "Chef",
  "Communication engineer"
];


export default function CategoryBanner( props: DataProps ) {

  const costomizet = useSelector((state) => state.customizer.activeDir)
  const rtl = costomizet == 'rtl'

  const { data: jobData } = useQuery({
    queryKey: ['jobs-data'],
    queryFn: async () => 
      await api().get(`/get/sector-jobs`).then((res) => {
      return res.data;
    })
  })

  const hajMinistryJobs = jobData?.filter((job: any) => selectedJobs?.map((el) => el?.toLowerCase())?.includes(job?.en_name))
  const bannarData = props?.name === "hajj-ministry" ? hajMinistryJobs : props?.category?.category_data


  return (
    <section 
      style={{ 
        backgroundImage: `url(${props?.category?.cat_bg})`,
        backgroundPosition: `center center`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="category_section w-screen min-h-[100vh] flex items-center justify-center bg-[#e2e2e2] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px] overflow-hidden"
    >
      <Container>
        <motion.div {...fadeIn} style={{ color: props?.category?.cat_color }} className={`py-10 md:flex  gap-10 justify-between`}>
          <Col lg={6} sm={12} className=" md:mb-[40px] sm:mb[15px] xs:mb-[20px]">
            <h2 className="heading-4 font-serif leading-[3rem] font-semibold lg:w-full">
              <Translatable>
                {props?.category?.category_title}
              </Translatable>
            </h2>
          </Col>
          <Col lg={6} sm={12}>
            <Row sm={12} xs={1} className="gap-y-10">
              <Col className="xs:text-center">
                <span className="font-serif text-2xl font-bold mb-[10px] block xs:mb-[5px]">
                  <Translatable>
                    {props?.category?.title_sub}
                  </Translatable>
                </span>
                <p className="w-[85%] lg:w-full xs:w-[75%] text-lg sm:mx-auto">
                  <Translatable>
                    {props?.category?.title_sub_desc}
                  </Translatable>
                </p>
              </Col>
            </Row>
          </Col>
        </motion.div>
        <Row className={cn(rtl ? 'md:-ml-[30vw]' : 'md:-mr-[30vw]')}>
          <motion.div {...fadeIn} className="col w-full mt-32 md:mt-24 home-startup-interactivebanner">
            <InteractiveBanners bannerData={bannarData}/>
          </motion.div>
        </Row>
      </Container>
    </section>
  )
}
