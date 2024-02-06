import { memo } from 'react'

// Libraries
import { Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import PropTypes from "prop-types";
import tourism_logo1 from 'src/assets/tourism_autority/ministry-of-tourism.png'
import tourism_logo2 from 'src/assets/tourism_autority/sta-logo.png'
import tourism_logo_svg from 'src/assets/tourism_autority/TDF_LOGO_COLOR_WHITE.svg'
// components

// Data
const iconWithTextData = [
  {
    icon: tourism_logo1,
    title: "Innovative business",
    content: "Easy to customize",
  },
  {
    icon: tourism_logo2,
    title: "Expertly marketing",
    content: "High quality services",
  },
  {
    icon: tourism_logo_svg,
    title: "Engaging audiences",
    content: "Build perfect websites",
  },
]


// css
import "./_iconwithtext.scss"


const IconWithText = (props: any) => {
  return (
    <Row className={`${props.grid} md:justify-center`}>
      
      {
        props?.data?.map((item: any, i: any) => {
          return (
            <m.div key={i} className={`col${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}` : ""}`} {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}>
              <div className="rounded-md w-full">
                { item.icon && <img className='' src={item.icon} alt="" /> }

                {/* <div className='feature-box-content'>
                  {item.title && <span className="font-medium title font-serif">{item.title}</span>}
                  {item.content && <p>{item.content}</p>}
                  {props.theme === "icon-with-text-11" ? <Buttons ariaLabel="iconwithtext" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray md:text-md md:mb-[15px]" size="xl" color="#232323" title="Read more" /> : ""}
                </div> */}
              </div>
            </m.div>
          )
        })
      }
    </Row>
  )
}

IconWithText.defaultProps = {
  data: iconWithTextData,
  animationDelay: 0.6,
  animationDuration: 0.8,
  animationTransition: "circOut",
  theme: "icon-with-text-01",
}

IconWithText.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      icon: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      linkTitle: PropTypes.string,
      img: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
  animationTransition: PropTypes.string,
  theme: PropTypes.string,
  grid: PropTypes.string,
}


export default memo(IconWithText)