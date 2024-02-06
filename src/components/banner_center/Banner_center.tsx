import { Col, Container, Row } from 'react-bootstrap'
import { Parallax } from 'react-parallax';
import { Link as ScrollTo } from "react-scroll"
import Buttons from '../Button/Buttons'
import '../../scss/core/_classes.scss'
import '../../scss/core/_typography.scss'

export default function Banner_center() {


  return (
    <div className="md:flex md:items-center overflow-hidden relative h-[100vh]">
      <Parallax 
        className="lg-no-parallax w-full h-[100vh]" 
        strength={300}
        bgImage='https://images.unsplash.com/photo-1593625240542-8342965fe160?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      >
        <div className="absolute h-[100vh] w-full opacity-60 top-0 left-0 bg-gray-700x bg-[#241526a5] "></div>
        <Container className="relative">
          <Row className="justify-center h-[100vh]">
            <Col lg={10} md={11} xl={9} className="flex flex-col justify-center full-screen text-center px-10 xs:px-[15px]">
              <div className="bg-[#241526e6] rounded-[6px] p-[6.5rem] lg:p-5rem] md:p-[4.5rem] sm:px-8">
                <p className="font-serif font-medium uppercase text-[#016430] tracking-[3px] text-neonorange mb-[40px] sm:w-full sm:mb-[25px]">Ministry of Defence</p>
                <h1 className="font-serif font-semibold -tracking-[3px] text-white mb-14 sm:mb-[20px] xs:-tracking-[.5px] xs:text-[28px] xs:leading-[38px]">Unlock Your Potential, Serve with Strength!</h1>
                <div className="flex flex-row justify-center border-y border-[#ffffff1a] text-center py-[15px] mb-16 xs:block">
                  <div className="mr-[25px] xs:mr-0 sm:mr-[15px] max-w-[500px]">
                    <span className="text-md text-white font-serif font-medium uppercase inline-block">Join the Armed Forces Analysis Program Now and Discover Your Path to Excellence</span>
                  </div>
                </div>
                <ScrollTo href="#" to="ticket-packages" offset={0} delay={0} spy={true} smooth={true} duration={800}>
                  <Buttons type="submit" className="btn-fill btn-fancy font-medium border-[#f67a56] font-serif tracking-[1px] rounded-[2px] uppercase md:mb-[15px]" themeColor="#ff7a56" color="#fff" size="lg" title="Register Now" />
                </ScrollTo>
              </div>
            </Col>
          </Row>
        </Container>
      </Parallax>

    </div>
  )
}
