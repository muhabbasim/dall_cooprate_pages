import './_reset.scss'
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import { LazyMotion, domMax, m } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Translatable from '../translatable_text/Translatable';


const BannerSlide = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const swiperData = [
        {
            img: "https://images.unsplash.com/photo-1682687220208-22d7a2543e88?q=80&w=3475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Unleash Your Tourism Potential with Duhal!",
            subTitle: "Unveil your talents in the dynamic world of tourism. Let's chart a course to where your true strengths lie!",
            CTA: "Explore Your Strengths Now!"
        },
        {
          img: "https://images.unsplash.com/photo-1683009427692-8a28348b0965?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Tailored Just For You!",
          subTitle: "Your Duhal journey has led us to personalized recommendations. Explore where your strengths shine the brightest. Let's tailor your tourism path!",
        //   subTitle: "Explore where your strengths shine the brightest. Let's tailor your tourism path!",
          CTA: "Let's Get Started!"
        },
        {
            img: "https://images.unsplash.com/photo-1682687220795-796d3f6f7000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Adventure Awaits – Explore Opportunities!",
            subTitle: "Uncover your strengths and dive into a world of possibilities. Your tourism superpowers await!",
            CTA: "Let's Get Started!"

        },
        {
            img: "https://images.unsplash.com/photo-1682687220499-d9c06b872eee?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Embark on Your Duhal Adventure!",
            subTitle: "Are you prepared for an extraordinary journey? Your Duhal adventure commences now! Let the exploration begin",
            CTA: "Explore Your Strengths Now!"
        },
    ]

    return (
        <section className="home-startup-swiper min-h-[100vh]">
        
            <LazyMotion strict features={domMax}>
                <Swiper
                    effect="fade"
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    navigation={false}
                    pagination={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    fadeEffect={{ crossFade: true }}
                    modules={[Pagination, Navigation, EffectFade, Autoplay]}
                    onSlideChange={(swiperCore) => {
                        const { realIndex } = swiperCore;
                        setActiveSlide(realIndex)
                    }}
                    breakpoints={{ 767: { pagination: false } }}
                    className="min-h-[100vh] startup swiper-navigation-04 swiper-navigation-light swiper-pagination-03 swiper-pagination-light swiper-pagination-medium xl:sm-nav-hidden">
                    {swiperData.map((item, i) => {
                        return (
                          <SwiperSlide key={i} className="min-h-[100vh] overflow-hidden">
                              <m.div initial={{ scale: 1.2 }} animate={{ scale: activeSlide === i ? 1 : 1.2 }} transition={{ duration: 1.7, ease: "easeInOut" }} style={{ backgroundImage: `url(${item.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="overflow-hidden absolute h-full w-full top-0 left-0 cover-background "> </m.div>
                              {/* <m.div className="opacity-50 absolute h-full w-full top-0 left-0 "></m.div> */}
                              <Container className="h-full text-center">
                                  <Row className="w-full h-full flex items-center justify-center md:landscape:h-[900px]" >
                                      <Col xs={12} lg={7} md={10} className="justify-center items-center my-0 mx-auto relative flex flex-col">
                                          <m.h1 initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} 
                                          animate={{ clipPath: activeSlide === i ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} 
                                          transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }} className="font-serif font-semibold pb-[10px] text-[70px] tracking-[-2px] text-white mb-[35px] lg:text-[70px] lg:leading-[60px] xs:text-[35px] xs:leading-[40px] xs:mb-[20px]">
                                            <Translatable>
                                                {item.title}
                                            </Translatable>
                                        </m.h1>
                                          <m.span initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} animate={{ clipPath: activeSlide === i ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} transition={{ duration: 0.5, delay: 0.8, ease: "easeIn" }} className="font-serif block text-[19px] leading-[28px] mb-[35px] max-w-[400px]x font-light text-white xs:text-base xs:mb-[20px]">
                                            <Translatable>
                                                {item.subTitle}
                                            </Translatable>
                                        </m.span>
                                          <m.div initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} animate={{ clipPath: activeSlide === i ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} transition={{ duration: 0.5, delay: 0.9, ease: "easeIn" }}>
                                              <Link aria-label="started now" to="#" className="uppercase startup-link font-medium">
                                                  <Translatable>
                                                    {item.CTA}
                                                  </Translatable>
                                              </Link>
                                          </m.div>
                                      </Col>
                                  </Row>
                              </Container>
                          </SwiperSlide>
                        )
                    })}
                </Swiper>
            </LazyMotion>
        </section>
    )
}

export default BannerSlide