import { memo } from 'react'

// Libraries
import { Accordion } from 'react-bootstrap'
import { motion } from "framer-motion"
import PropTypes from "prop-types";
// import './_accordion.scss'

// css
import { AccordionData } from './AccordionData';
import Translatable from '../translatable_text/Translatable';

const Accordions = (props: any) => {
    return (
        <div className={`accordion-style-05`}>
            <Accordion>
                {
                    props.data.map((item: any, key: any) => {
                        return (
                            <motion.div className={`accordion-item-wrapper`}
                                key={key}
                                {...{ ...props.animation, transition: { delay: key * props.animationDelay } }}
                            >
                                <Accordion.Item key={key} eventKey={key}>
                                    {item.title && 
                                        <Accordion.Header>
                                            { item.title && <span className="panel-title"><Translatable>{item.title}</Translatable></span>}
                                        </Accordion.Header>
                                    }
                                    {item?.content && 
                                        <Accordion.Body> 
                                            {item.content && item.content.map((subItem: any) => (
                                                <div className='flex flex-col justify-center'>
                                                    <span className='text-gray-400'>
                                                        <Translatable>
                                                            {subItem.subCat}
                                                        </Translatable>
                                                    </span>
                                                </div>
                                            ))}
                                        </Accordion.Body>}
                                </Accordion.Item>
                            </motion.div>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

Accordions.defaultProps = {
    data: AccordionData,
    animationDelay: 0.2,
}

Accordion.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string,
            img: PropTypes.string,
            content: PropTypes.arrayOf(
                PropTypes.exact({
                    subCat: PropTypes.string,
                })
            ),
            
        
        })
    ),
    animation: PropTypes.object,
    animationDelay: PropTypes.number,

}

export default memo(Accordions)