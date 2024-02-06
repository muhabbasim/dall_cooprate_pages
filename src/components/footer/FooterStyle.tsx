import { memo } from 'react'
import './_feather.scss'
import './_footer.scss'
// Libraries
import { Col, Row } from 'react-bootstrap';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

// Components
import { Input } from '../Form/Form'

// Data
import FooterData from './FooterData';
import { FooterContainer } from './FooterContainer';
import FooterMenu from './FooterContainer'
import { IconMail } from '@tabler/icons-react';
import { DataProps } from 'src/data/DataProps';


const FooterStyle = (props: DataProps) => {
    return (
        <FooterContainer topSpace={false} className={`footer-style-04`}>
            <div className="md:py-[50px]">
                <Container >
                    <Row className="justify-between">
                        <Col lg={{ span: 3, order: 0 }} sm={{ span: 6, order: 1 }} className="md:mb-[40px] xs:mb-[25px]">
                            <Link aria-label="link" to="/" className="mb-[25px] block">
                                {props?.logo ? (
                                    <img src={props.logo} alt="logo" width="111" height="36" />
                                ) : (
                                    <p>logo</p>
                                )}
                            </Link>
                            <p className="w-full text-gray-400 text-lg md:w-[80%] mb-[30px] xs:w-11/12">Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.</p>
                        </Col>
                        <FooterMenu data={FooterData.slice(0, 2)} lg={{ span: 2, order: 0 }} sm={{ span: 6, order: 2 }} className="xs:mb-[25px]" titleClass="text-black" />
                        <Col xl={{ span: 3 }} lg={{ span: 4, order: 0 }} sm={{ span: 6, order: 3 }} md={5}>
                            <span className="font-serif font-bold block text-white mb-[20px] xs:mb-[10px]">Subscribe to newsletter</span>
                            <p className="mb-[25px] text-gray-400 md:mb-[20px]">Enter your email address for receiving valuable newsletters.</p>
                            <Formik
                                initialValues={{ email: "" }}
                                validationSchema={Yup.object().shape({ email: Yup.string().email("Invalid email.").required("Field is required.") })}
                                onSubmit={() => {}}
                            >
                                {({ isSubmitting }) => (
                                    <div className="relative mb-[25px] subscribe-style-09 mx-auto">
                                        <Form className="relative" placeholder={undefined}>
                                            <Input showErrorMsg={false} type="email" name="email" labelClass="w-full" className="border-[1px] border-solid border-slate-300 rounded-md py-[12px] pl-[15px] pr-[60px] w-full small-input placeholder-[#A6A6A6]" placeholder="Enter your email address" />
                                            <button aria-label="subscribe" type="submit" className={`text-lg absolute top-0 right-0 tracking-[1px] py-[12px] px-[28px] btn-gradient rounded-r-md uppercase${isSubmitting ? " loading" : ""}`} >
                                                <IconMail/>
                                            </button>
                                        </Form>
                                    
                                    </div>
                                )}
                            </Formik>
                            <p className='text-gray-400'>&copy; Copyright {new Date().getFullYear()} <Link aria-label="link" to="/" className="underline underline-offset-4 font-medium text-gray-400">Litho</Link></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </FooterContainer >
    )
}

// FooterStyle.defaultProps = {
//     data: FooterData,
//     currentLand: ''
// }

// FooterStyle.propTypes = {
//     className: PropTypes.string,
//     currentLand: PropTypes.any,
// }

export default memo(FooterStyle)