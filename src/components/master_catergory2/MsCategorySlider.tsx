import { memo } from 'react'


// Libraries
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import cooperatesData from 'src/data/CooporateData';
import { DataProps } from 'src/data/DataProps';
import { HiArrowLongRight } from "react-icons/hi2";
import { cn } from 'src/lib/utils';
import { useSelector } from 'src/store/Store';


const MsCategorySlider = (props: any) => {
  const sections = cooperatesData
  const rtl = useSelector(state => state.customizer.activeDir === 'rtl')
    return (
        <div className={props.className}>
            <Swiper
                className="text-slider-02 black-move"
                modules={[Autoplay, Pagination, Navigation]}
                {...props.carousalOption} >
                {
                    sections?.map((item: DataProps, i: any) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="cover-background h-[480px] items-start flex p-[4.5rem] lg:p-12 md:p-16 xs:p-12" 
                                    style={{ backgroundImage: `url(${item?.hero?.hero_images[0]?.img})` }}
                                >
                                    <div className="absolute h-full w-full top-0 left-0 overlay bg-darkgray"></div>
                                    <div className="text-wrapper cursor-default text-start flex flex-col w-[55%] bg-white box-shadow-extra-large no-transition p-[4.5rem] pt-0 slider-zoom-content z-[1] relative xl:w-[60%] xl:p-[3rem] lg:w-[80%] lg:p-[2.5rem] md:w-[55%] md:p-[4.5rem] sm:w-[60%] xs:w-full">
                                        <h3 className=" -mt-20 -mr-8 mb-10 ml-auto w-20 text-[#fff] text-center pb-4 pt-24 bg-[#f4d956] text-[40px] leading-[3.4rem] font-medium font-serif self-end lg:w-[75px] md:mt-[-50px]">
                                            {i + 1 >= 10 ? "" : "0"}{i + 1}
                                        </h3>
                                        <h4 className=" font-serif -mt-20 text-darkgray leading-[3rem] p-0 mb-[25px] -tracking-[.5px] lg:mb-[10px] md:text-[27px] text-gray-500 sm:text-[20px]">
                                            {/* <span className="uppercase font-serif text-darkgray leading-[3rem] p-0 mb-[5px] -tracking-[.5px]  md:text-[27px] text-gray-500">
                                                {item?.logo_name_en}
                                            </span> */}
                                            <div className='flex flex-col gap-4 justify-center items-end'>

                                                <img src={item?.logo} alt="logo" className={cn('w-24')}/>
                                                <h1 className={cn('text-black m-0 font-bold text-3xl uppercase')}>
                                                    {rtl ? item.logo_name_ar : item?.logo_name_en}
                                                </h1>
                                            </div>
                                            <span className=" text-black font-semibold block mr-[5px] md:inline-block xs:block">
                                                {item.name}
                                            </span>
                                        </h4>
                                        {item?.hero?.hero_title2 && 
                                            <p className="uppercase text-xmd mb-[25px] leading-[32px] md:mb-[20px] xs:mb-[15px]">
                                                {item?.hero?.hero_title2}
                                            </p>
                                        }
                                        <Link aria-label="textslider" className="font-medium text-darkgray font-serif no-underline hover:text-[#969896] cursor-pointer" to={`/${item.name}`} >
                                            <div className='flex items-center gap-4'>
                                                <span className=' text-rose-800 text-xl hover:text-slate-500'>
                                                    Visit website
                                                </span>
                                                <HiArrowLongRight className='w-7 h-7'/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}


MsCategorySlider.propTypes = {
    className: PropTypes.string,
    carousalOption: PropTypes.object,
}
export default memo(MsCategorySlider)