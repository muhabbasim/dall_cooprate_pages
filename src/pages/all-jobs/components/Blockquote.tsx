import { memo } from 'react'
// Libraries
import PropTypes from "prop-types";
import { m } from "framer-motion";

// css
import "../_blockquote.scss"
import { useSelector } from 'src/store/Store';

const Blockquote = (props: any) => {
    const rtl = useSelector(state => state.customizer.activeDir === 'rtl')
    
    return (
        <m.blockquote className={` ${ !rtl ? 'border-l-gray-700 border-l-4' : 'border-r-gray-700 border-r-4'} ${props.theme}${props.className ? ` ${props.className}` : ""}`} {...props.animation}>
            {props.icon && <i className={props.icon}></i>}
            {props.title && <h6>{props.title}</h6>}
            {props.author && <span className="text-basecolor">{props.author}</span>}
        </m.blockquote>
    )
}

Blockquote.defaultProps = {
    author: "",
    theme: "blockquote-style-01",
    title: "",
    icon: ""
}

Blockquote.propTypes = {
    className: PropTypes.string,
    author: PropTypes.string,
    theme: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    animation: PropTypes.object
}

export default memo(Blockquote)