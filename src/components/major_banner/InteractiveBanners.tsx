import React, { memo } from 'react'
import './_interactivebanners.scss'
// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import PropTypes from "prop-types"

// Components
import { useLocation } from 'react-router';
import Translatable from '../translatable_text/Translatable';
import { useSelector } from 'src/store/Store';


const InteractiveBanners = (props: any) => {

    const swiperRef = React.useRef(null)
    const location = useLocation();
    const pathName = location.pathname.split('/')[1]

    const customizer = useSelector(state => state.customizer.activeDir)
    const rtl = customizer === 'rtl'


    return (
        <div className={`interactivebanners-style-02  md:mr-[-15px] sm:contents ${props.className}`}>
            {!rtl ? (
                <Swiper 
                    ref={swiperRef} 
                    className="white-move" 
                    modules={[Pagination, Navigation, EffectFade, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{ 992: { slidesPerView: 4 }, 768: { slidesPerView: 1 } }}
                >
                    {
                        props?.bannerData?.map((item: any, i: number) => {

                            return (
                                <SwiperSlide key={item.id} className="my-swiper">
                                <div className="interactivebanners-main" {...{ ...props?.animation, transition: { delay: i * props?.animationDelay } }}>
                                    <div className="relative overflow-hidden overlay-bg rounded-md">
                                        {item?.cover && <img className="interactiveanners-img h-[350px] object-cover" src={item?.cover} alt="interactive banners" />}
                                    </div>
                                    <div className="fancy-text-content px-[55px] xs:px-[30px] xxs:px-[30px]">
                                        {item?.name && <span style={{ backgroundColor: '#723030'}} className="interactivebanners-subtitle px-[15px] py-[5px] mb-[20px] rounded-[2px] text-white text-xxs font-serif uppercase leading-4 tracking-[1px] inline-block">
                                            <Translatable>
                                                {item?.name}
                                            </Translatable>
                                        </span>}
                                        {item?.major_name && <div className="interactivebanners-title mb-[10px] text-white lg:text-[18px]">
                                            <Translatable>
                                                {item?.major_name}
                                            </Translatable>
                                        </div>}
                                        
                                        {item && 
                                            <a href={`${pathName}/category/${item?.id}`}  className="btn rounded-[3px] mt-[15px]  font-serif uppercase md:mb-[15px]" color="#232323">
                                                <Translatable>
                                                    Read more
                                                </Translatable>
                                            </a>
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            ) : (
                <Swiper 
                    ref={swiperRef} 
                    className="white-move" 
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: true }}
                    breakpoints={{ 992: { slidesPerView: 4 }, 768: { slidesPerView: 2 } }}
                > {
                    props?.bannerData?.map((item: any, i: number) => {

                        return (
                            <SwiperSlide key={item.id} className="my-swiper">
                            <div className="interactivebanners-main" {...{ ...props?.animation, transition: { delay: i * props?.animationDelay } }}>
                                <div className="relative overflow-hidden overlay-bg rounded-md">
                                    {item?.cover && <img className="interactiveanners-img h-[350px] object-cover" src={item?.cover} alt="interactive banners" />}
                                </div>
                                <div className="fancy-text-content px-[55px] xs:px-[30px] xxs:px-[30px]">
                                    {item?.name && <span style={{ backgroundColor: '#723030'}} className="interactivebanners-subtitle px-[15px] py-[5px] mb-[20px] rounded-[2px] text-white text-xxs font-serif uppercase leading-4 tracking-[1px] inline-block">
                                        <Translatable>
                                            {item?.name}
                                        </Translatable>
                                    </span>}
                                    {item?.major_name && <div className="interactivebanners-title mb-[10px] text-white lg:text-[18px]">
                                        <Translatable>
                                            {item?.major_name}
                                        </Translatable>
                                    </div>}
                                    
                                    {item && 
                                        <a href={`${pathName}/category/${item?.id}`}  className="btn rounded-[3px] mt-[15px]  font-serif uppercase md:mb-[15px]" color="#232323">
                                            <Translatable>
                                                Read more
                                            </Translatable>
                                        </a>
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            )}
        </div>
    )
}

InteractiveBanners.defaultProps = {
    animationDelay: 0.2
}

InteractiveBanners.propTypes = {
    className: PropTypes.string,
    grid: PropTypes.string,
    carousalOption: PropTypes.object,
    animation: PropTypes.object,
    bannerData: PropTypes.object,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            subtitle: PropTypes.string,
            title: PropTypes.string,
            img: PropTypes.string,
            btnTitle: PropTypes.string,
            btnLink: PropTypes.string,
        })
    )
}


export default memo(InteractiveBanners)


// title={t(`${item?.btnTitle}`)}