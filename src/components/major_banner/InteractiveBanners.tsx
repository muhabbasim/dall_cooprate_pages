import React, { memo } from 'react'
import './_interactivebanners.scss'
// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import PropTypes from "prop-types"

// Components
import Buttons from '../Button/Buttons'
import { useLocation } from 'react-router';
import { DataProps } from 'src/data/DataProps';
import Translatable from '../translatable_text/Translatable';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'src/store/Store';

  

const InteractiveBanners = (props: any) => {
    const swiperRef = React.useRef(null)
    const location = useLocation();
    const pathName = location.pathname.split('/')[1]
    const {t} = useTranslation()
    const bannerData: DataProps = props?.bannerData

    const customizer = useSelector(state => state.customizer.activeDir)
    const rtl = customizer === 'rtl'
    
    return (
        <div className={`interactivebanners-style-02 hidden md:mr-[-15px] sm:contents ${props.className}`}>
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
                    breakpoints={{ 992: { slidesPerView: 4 }, 768: { slidesPerView: 2 } }}
                >
                    {
                        bannerData?.category?.category_data?.map((item: any, i: number) => {

                            return (
                                <SwiperSlide key={item.id} className="my-swiper">
                                    <div className="interactivebanners-main" {...{ ...props?.animation, transition: { delay: i * props?.animationDelay } }}>
                                        <div className="relative overflow-hidden overlay-bg rounded-md">
                                            {item?.img && <img className="interactiveanners-img h-[350px] object-cover" src={item?.img} alt="interactive banners" />}
                                        </div>
                                        <div className="fancy-text-content px-[55px] xs:px-[30px] xxs:px-[30px]">
                                            {item?.subtitle && <span style={{ backgroundColor: item?.backgroundColor}} className="interactivebanners-subtitle px-[15px] py-[5px] mb-[20px] rounded-[2px] text-white text-xxs font-serif uppercase leading-4 tracking-[1px] inline-block">
                                                <Translatable>
                                                    {item?.subtitle}
                                                </Translatable>
                                            </span>}
                                            {item?.title && <div className="interactivebanners-title mb-[10px] text-white lg:text-[18px]">
                                                <Translatable>
                                                    {item?.title}
                                                </Translatable>
                                            </div>}
                                            {(item?.btnTitle && item?.btnLink) && <Buttons ariaLabel="interactive button" to={`${pathName}/category/${item?.id}`} title={t(`${item?.btnTitle}`)} className="btn-fill btn-fancy rounded-[3px] mt-[15px] font-medium font-serif uppercase md:mb-[15px]" themeColor="#fff" color="#232323" />}
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
                >
                    {
                        bannerData?.category?.category_data?.map((item: any, i: number) => {

                            return (
                                <SwiperSlide key={item.id} className="my-swiper">
                                    <div className="interactivebanners-main" {...{ ...props?.animation, transition: { delay: i * props?.animationDelay } }}>
                                        <div className="relative overflow-hidden overlay-bg rounded-md">
                                            {item?.img && <img className="interactiveanners-img h-[350px] object-cover" src={item?.img} alt="interactive banners" />}
                                        </div>
                                        <div className="fancy-text-content px-[55px] xs:px-[30px] xxs:px-[30px]">
                                            {item?.subtitle && <span style={{ backgroundColor: item?.backgroundColor}} className="interactivebanners-subtitle px-[15px] py-[5px] mb-[20px] rounded-[2px] text-white text-xxs font-serif uppercase leading-4 tracking-[1px] inline-block">
                                                <Translatable>
                                                    {item?.subtitle}
                                                </Translatable>
                                            </span>}
                                            {item?.title && <div className="interactivebanners-title mb-[10px] text-white lg:text-[18px]">
                                                <Translatable>
                                                    {item?.title}
                                                </Translatable>
                                            </div>}
                                            {(item?.btnTitle && item?.btnLink) && <Buttons ariaLabel="interactive button" to={`${pathName}/category/${item?.id}`} title={t(`${item?.btnTitle}`)} className="btn-fill btn-fancy rounded-[3px] mt-[15px] font-medium font-serif uppercase md:mb-[15px]" themeColor="#fff" color="#232323" />}
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