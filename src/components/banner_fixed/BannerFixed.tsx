import { Col, Container, Row } from 'react-bootstrap'
import './_style.scss'
import { IconArrowRight } from '@tabler/icons-react'
import { Box } from '@mui/material'
import { Parallax } from 'react-parallax';
import backgroundImg from 'src/assets/hr_development/hr_dev.avif'

export default function BannerFixed() {
  return (
    <section className="BannerFixed-background h-[100vh]">
        <Parallax 
        className="lg-no-parallax w-full h-[100vh]" 
        strength={300}
        bgImage={backgroundImg}
      >

        <Box className='relative h-[100vh]'>
            <div className="absolute h-full w-full opacity-20 top-0 left-0 bg-[#707070]"></div>
            <Container className="relative pt-[130px] z-40 lg:pl-[120px]">
                <Row className="items-center h-[100vh]x md:h-[630px] sm:h-[500px]">
                    <Col xl={6} lg={6} md={7} sm={10} className="font-serif font-medium">
                        <h2 className=" text-white leading-[65px] tracking-[-1px] text-7xl font-bold  mb-[65px] sm:mb-[60px]">We provide reliable business consulting help</h2>
                        <div className="text-md uppercase tracking-[2px] flex">
                            <span className="w-[40px] h-[1px] bg-[#bf8c4c] self-center mr-[25px]"></span>
                            <span className="text-[#bf8c4c]">Solution for your business</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="flex flex-row justify-end w-[750px] absolute right-0 bottom-0 z-[1] sm:w-full">
                <Row className=" items-center justify-end mx-0 w-full">
                    <Col xl={4} sm={12}  className="items-center flex bg-[#7fa9b9] h-full py-12 px-20 xs:px-12">
                        <h3 className="heading-6 font-serif text-white font-light m-0">You are growing company <span className="font-semibold">looking for employees?</span></h3>
                    </Col>
                    <Col xs={1} className="p-0 h-full lg:hiddenx">
                        <a aria-label="link contact classic" target='_blank' href="http://localhost:5175/auth/cooperate_pages_register" className="text-center flex items-center justify-center bg-[#f9f6f3] h-full">
                            <IconArrowRight className="line-icon-Arrow-OutRight text-[60px] text-[#bf8c4c]"/>
                        </a>
                    </Col>
                </Row>
            </div>
        </Box>
      </Parallax>

    </section>
  )
}

