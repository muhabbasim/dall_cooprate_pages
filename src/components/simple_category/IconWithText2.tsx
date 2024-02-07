import { memo } from 'react'

// Libraries
import { Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import PropTypes  from "prop-types";
import { Link } from 'react-router-dom';
import { MdMilitaryTech } from "react-icons/md";
// components
import Buttons from '../Button/Buttons'

import { LuMessageSquare } from 'react-icons/lu';
import Translatable from '../translatable_text/Translatable';

const IconWithTextData_02 = [
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


const IconWithText2 = (props:any) => {
  return (
    <Row className={`${props.grid} md:justify-center iconWithTextContainer`}>
      {
        props.data.map((item: any, i: any) => {
          return (
            <motion.div key={i} className={`col${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}` : ""}`} {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}>
              <div className="iconWithTextDiv rounded-md w-full flex items-center overlay-bg gap-6">
                {
                  item.img ? (
                    <img className=" w-[100px] h-[100px] items-center justify-center" src={item.img} alt="featurebox" />
                  )
                    :
                    item.icon ? ( <Link aria-label="link for icon" to="#"><LuMessageSquare className=''/></Link>
                    )
                      :
                      item.textIcon ? (<span className="text-basecolor inline-block icon-text">{item.textIcon}</span>)
                        :
                        <span className="text-basecolor inline-block icon-text px-3">{`${i <= 9 ? "0" : ""}${i + 1}`}</span>
                }

                <div className='feature-box-content'>
                  {item.title && 
                    <span className="font-medium title font-serif text-3xl">
                      <Translatable>
                        {item.title}
                      </Translatable>
                    </span>
                  }
                  {/* {item?.content && <p>{item?.content}</p>} */}
                  <div className='subCat space-y-1 bg-[#68726b] p-2 rounded-sm'>
                    {item?.content.map((sub: any, i: any) => { 
                      return (
                        <div key={i}>
                          <span className='text-gray-500 text-lg flex items-center gap-2'>
                            <div>
                              <MdMilitaryTech />
                            </div>

                            <Translatable>
                              {sub?.subCat}
                            </Translatable>
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  {props.theme === "icon-with-text-11" ? <Buttons ariaLabel="iconwithtext" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray md:text-md md:mb-[15px]" size="xl" color="#232323" title="Read more" /> : ""}
                </div>
                {(item.linkTitle || item.link) && <Buttons ariaLabel="iconwithtext" className="font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor" to={item.link} title={item.linkTitle} />}
              </div>
            </motion.div>
          )
        })
      }
    </Row>
  )
}

IconWithText2.defaultProps = {
  data: IconWithTextData_02,
  animationDelay: 0.6,
  animationDuration: 0.8,
  animationTransition: "circOut",
  theme: "icon-with-text-01",
}

IconWithText2.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      icon: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.array,
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


export default memo(IconWithText2)