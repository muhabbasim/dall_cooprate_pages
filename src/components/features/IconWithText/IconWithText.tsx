import { memo } from 'react'

// Libraries
import { Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import "./_iconwithtext.scss"


type Props = {
  name: string;
  logo: any;
}


const IconWithText = (props: any) => {

  return (
    <Row className={`${props.grid} md:justify-center`}>
      
      {
        props?.sponsorship?.map((item: Props, i: any) => {
          return (
            <m.div key={i} className={` col${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}` : ""}`} {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}>
              <div className="rounded-md flex w-full h-[150px] items-center justify-center">
                { item.logo && <img className='w-[200px]' src={item.logo} alt="" /> }
                {/* { item.name && <h2>{item?.name}</h2>} */}
              </div>
            </m.div>
          )
        })
      }
    </Row>
  )
}



export default memo(IconWithText)