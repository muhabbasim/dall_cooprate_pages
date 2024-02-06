import { memo } from "react"

// Libraries
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

// Data

// css

export const FooterContainer = (props: any) => {
    // Add Global Data

    // useEffect(() => { 
    //     // Calculate Footer Height
    //     let footerEl: any = document.querySelector("footer");

    //     function setTopSpace() {
    //         let windowWidth = window.innerWidth;
    //         let footerHeight = 0;

    //         if (props.parallax) {
    //             if (props.parallax.desktop === true) {
    //                 footerHeight = footerEl.offsetHeight;
    //                 footerEl.classList.add("pos-fixed")
    //             }

    //             if (windowWidth <= 1199) {
    //                 if (props.parallax.lg === false) {
    //                     footerHeight = 0;
    //                     footerEl.classList.remove("pos-fixed")
    //                 }

    //                 if (props.parallax.lg === true) {
    //                     footerHeight = footerEl.offsetHeight;
    //                     footerEl.classList.add("pos-fixed")
    //                 }
    //             }

    //             if (windowWidth <= 991) {
    //                 if (props.parallax.md === false) {
    //                     footerHeight = 0;
    //                     footerEl.classList.remove("pos-fixed")
    //                 }

    //                 if (props.parallax.md === true) {
    //                     footerHeight = footerEl.offsetHeight;
    //                     footerEl.classList.add("pos-fixed")
    //                 }
    //             }

    //             if (windowWidth <= 767) {
    //                 if (props.parallax.sm === false) {
    //                     footerHeight = 0;
    //                     footerEl.classList.remove("pos-fixed")
    //                 }

    //                 if (props.parallax.sm === true) {
    //                     footerHeight = footerEl.offsetHeight;
    //                     footerEl.classList.add("pos-fixed")
    //                 }
    //             }

    //             if (windowWidth <= 575) {
    //                 if (props.parallax.xs === false) {
    //                     footerHeight = 0;
    //                     footerEl.classList.remove("pos-fixed");
    //                 }

    //                 if (props.parallax.xs === true) {
    //                     footerHeight = footerEl.offsetHeight;
    //                     footerEl.classList.add("pos-fixed")
    //                 }
    //             }
    //         }

            
    //     }

    //     setTimeout(setTopSpace, 1000);
    //     window.addEventListener("resize", function () {
    //         setTimeout(setTopSpace, 1000);
    //     });
    // },
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     [])

    return (
        <footer className={`${props.theme}${props.className ? ` ${props.className}` : ""}`} style={props.style}>
            {props.children}
        </footer>
    )
}

type Props = {
    data: any;
    titleClass: string;
    className: string;
} 

const FooterMenu = ({ data, titleClass, className, ...props }: Props) => {
    return (
        <>
            {data.map((item: any, i: any) => {
                return (
                    <Col key={i} {...props} className={`footer-menu${className ? ` ${className}` : ""}`}>
                        {item.title && <span className={`mb-[20px] block font-bold text-lg font-serif xs:!mb-[10px] text-white hover:text-slate-700${titleClass ? ` ${titleClass}` : ""}`}>{item.title}</span>}
                        <ul>
                            {item.submenu.map((item: any, i: any) => {
                                return ((item.link || item.title) && <li key={i} className="mb-[7px] text-gray-400 hover:white"><Link to={item.link}>{item.title}</Link></li>)
                            })}
                        </ul>
                    </Col>
                )
            })}
        </>
    )
}

FooterMenu.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string,
            submenu: PropTypes.arrayOf(
                PropTypes.exact({
                    title: PropTypes.string,
                    link: PropTypes.string,
                })
            ),
        })),

    lg: PropTypes.any,
    sm: PropTypes.any,
}

FooterContainer.defaultProps = {
    theme: "dark"
}

export default memo(FooterMenu)