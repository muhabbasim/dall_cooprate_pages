
// Libraries
import { Col, Row } from 'react-bootstrap'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { motion } from 'framer-motion'
// Components
import Buttons from '../../components/Button/Buttons'
import { ContactFormStyle03Schema, } from '../Form/FormSchema';
import { Checkbox, Input, TextArea } from '../Form/Form';
import ContactTitle from './ContactTitle';
import { fadeIn } from '../animation/GlobalAnimations';
import backgroundImg from 'src/assets/backgrounds/home-decor-bg-img-02.webp'
import Translatable from '../translatable_text/Translatable';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const {t} = useTranslation();

  return (
    <>
      <section 
        style={{ backgroundImage: `url(${backgroundImg}`}}
        className="cover-background py-[160px] lg:py-[120px] md:py-[75px] sm:py-[50px] xs:py-[80px] xxs:py-[50px]"
      >
        <motion.div {...fadeIn}>
          <Container maxWidth='lg'>
            <Row>
              <Col className='mb-[6%]'>
                <ContactTitle/>
              </Col>
            </Row>
            <Row className="justify-center">
              <Col>
                <Formik
                  initialValues={{ name: '', email: '', phone: '', terms_condition: false }}
                  validationSchema={ContactFormStyle03Schema}
                  onSubmit={()=> {''}}

                >
                  {({ isSubmitting }) => (
                    <Form placeholder={undefined}>
                      <Row className="row-cols-1 row-cols-md-2">
                        <Col className="mb-16 lg:mb-[25px] sm:mb-0">
                          <Input showErrorMsg={false} type="text" name="name" className="py-[15px] px-[20px]  w-full border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder={t(`Your name`)} />
                          <Input showErrorMsg={false} type="email" name="email" className="py-[15px] px-[20px] w-full  border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder={t(`Your email address`)} />
                          <Input showErrorMsg={false} type="email" name="phone" className="py-[15px] px-[20px] w-full  border-[1px] border-solid border-[#dfdfdf]" labelClass="sm:mb-[25px]" placeholder={t('Mobile number')} />
                        </Col>
                        <Col className="mb-16 lg:mb-[25px]">
                          <TextArea className="border-[1px] border-solid border-[#dfdfdf] w-full h-full py-[15px] px-[20px]  resize-none" name="comment" labelClass="h-full sm:h-[200px]" placeholder={t(`Your message`)}></TextArea>
                        </Col>
                        <Col className="text-left h-full sm:mb-[20px]">
                          <Checkbox type="checkbox" name="terms_condition" className="inline-block mt-[4px]" labelClass="flex items-start">
                            <span className="ml-[10px] mb-[20px] text-sm w-[85%] md:w-[90%] xs:w-[85%]">
                              <Translatable>
                                I accept the terms & conditions and I understand that my data will be hold securely in accordance with the
                              </Translatable>
                              <Link to="/privacy" target="_blank" className=" underline ">
                                <Translatable>
                                  privacy policy
                                </Translatable>
                              </Link>.</span>
                          </Checkbox>
                        </Col>
                        <Col className=" xl:text-end text-center">
                          <Buttons type="submit" className={` text-xs tracking-[1px] rounded-none py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""}`} themeColor={["#556fff", "#ff798e"]} size="md" color="#fff" title={t(`Send Message`)} />
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </Container>
        </motion.div>

      </section>
    </>
  )
}

export default ContactForm