import { memo } from "react";
import './_textslider.scss'
// Libraries
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

// Component
import Buttons from '../Button/Buttons'

// Data
const TextSliderData01 = [
  {
      img: "https://images.unsplash.com/photo-1707173513949-da36b73461ad?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subtitle: "Romantic",
      title: "Romantic getaways around the world",
      content: "Lorem ipsum dolor sit consectetur adipiscing eiusmod tempor incididunt labore dolore magna ut enim.",
      buttonTitle: "Explore vacation",
      buttonLink: "#"
  },
  {
      img: "https://images.unsplash.com/photo-1701415175988-c8aef8451f9c?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subtitle: "Family",
      title: "Explore incredible deals on family tours",
      content: "Lorem ipsum dolor sit consectetur adipiscing eiusmod tempor incididunt labore dolore magna ut enim.",
      buttonTitle: "Explore vacation",
      buttonLink: "#"
  },
  {
      img: "https://images.unsplash.com/photo-1707150156073-c9ffe260d0bc?q=80&w=1853&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subtitle: "Wildlife",
      title: "Explore a wide range of wildlife packages",
      content: "Lorem ipsum dolor sit consectetur adipiscing eiusmod tempor incididunt labore dolore magna ut enim.",
      buttonTitle: "Explore vacation",
      buttonLink: "#"
  }
]

const TextSlider01 = (props: any) => {
  return (
    <div className={props.className}>
      <Swiper
        className="text-slider-01 h-[550px] black-move"
        modules={[Autoplay, Pagination, Navigation]}
        {...props.carousalOption}
      >
        {props.data.map((item: any, i: any) => {
          return (
            <SwiperSlide key={i}>
              <div className="col-lg-12 h-full" style={{ backgroundImage: `url(${item.img})` }} >
                <div className="text-slider-swiper-wrapper w-[45%] h-[80%] bg-white py-20 px-[5.5rem] xl:w-[45%] xl:p-12 lg:w-[60%] md:w-[40%] md:p-20 sm:w-[60%] xs:w-[95%]">
                  <div className="mb-[20px]">
                    <span className="font-serif font-medium text-basecolor inline-block align-middle">
                      {i + 1 >= 10 ? "" : "0"}
                      {i + 1}
                    </span>
                    <span className="h-[1px] w-[30px] mx-[10px] bg-mediumgray inline-block align-middle"></span>
                    {item.subtitle && (
                      <span className="font-serif font-medium text-basecolor inline-block uppercase align-middle">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  {item.title && (
                    <h3 className="heading-6 font-serif font-medium text-darkslateblue self-center sm:mb-[15px]">
                      {item.title}
                    </h3>
                  )}
                  {item.content && (
                    <p className="mb-10 sm:mb-[35px]">{item.content}</p>
                  )}
                  {(item.buttonTitle || item.buttonLink) && (
                    <Buttons
                      ariaLabel="textslider button"
                      className="btn-fill btn-fancy text-white rounded-none font-medium font-serif uppercase"
                      themeColor="#232323"
                      color="#fff"
                      size="sm"
                      title={item.buttonTitle}
                      to={item.buttonLink ? item.buttonLink : "#"}
                    />
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

TextSlider01.defaultProps = {
  data: TextSliderData01,
}

TextSlider01.propTypes = {
  className: PropTypes.string,
  carousalOption: PropTypes.object,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      content: PropTypes.string,
      buttonTitle: PropTypes.string,
      buttonLink: PropTypes.string,
    })
  )
}
export default memo(TextSlider01);
