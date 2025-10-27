import { motion } from 'framer-motion'
// styles
import './_blockquote.scss'
import './_dropcaps.scss'
import './_blog.scss'
import './buttonStyle.css'
// import 'src/components/major_banner/_interactivebanners.scss'

// Libraries
import { Col, Row } from 'react-bootstrap'
import { Container } from '@mui/material'

// import backgroundImg from 'src/assets/backgrounds/home-decor-bg-img-02.webp'
import backgroundImg2 from 'src/assets/backgrounds/home-freelancer-img-06.webp'
import Translatable from 'src/components/translatable_text/Translatable'
// import { useSelector } from 'src/store/Store'

import { useQuery } from '@tanstack/react-query'
import api from 'src/context/apiRequest'
import JobsPageSkeleton from 'src/components/skeleton/JobsPageSkeleton'


const PostPage = () => {

  const { data: jobData, isLoading } = useQuery({
    queryKey: ['jobs-data'],
    queryFn: async () => 
      await api().get(`/get/sector-jobs`).then((res) => {
      return res.data;
    })
  })
  
  return (
    <div style={{ backgroundImage: `url(${backgroundImg2})`}} className='cover-background pt-[100px] h-[100vh] px-10 pb-10'>
      <Container maxWidth="lg">
        <motion.div  className={`py-10 flex flex-col md:flex-row gap-10 justify-between`}>
          <Col lg={6} md={12} sm={12} className=" md:mb-[40px] sm:mb[15px] xs:mb-[20px]">
            <h2 className="heading-4 leading-[3rem] font-semibold lg:w-full">
              <Translatable>
                All jobs
              </Translatable>
            </h2>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Row sm={12} xs={1} className="gap-y-10">
              <Col className="xs:text-center">
                <span className="text-2xl font-bold mb-[10px] block xs:mb-[5px]">
                  <Translatable>
                    Start Your Career in the Hajj and Umrah Sector Today
                  </Translatable>
                </span>
                <p className="w-[85%] lg:w-full xs:w-[75%] text-lg sm:mx-auto">
                  <Translatable>
                  Sign up, discover opportunities, and take the first step towards a fulfilling career serving millions of pilgrims.
                  </Translatable>
                </p>
              </Col>
            </Row>
          </Col>
        </motion.div>
        {jobData ? (
          <>
            <motion.div className="interactivebanners-style-02 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-32 md:mt-24 home-startup-interactivebanner">
              { jobData?.map((job: any) => {
                return (
                  <div key={job?.id} className="interactivebanners-main">
                    <div className="relative overflow-hidden overlay-bg rounded-md">
                        {job?.cover && <img className="interactiveanners-imgx h-[350px] object-cover" src={job?.cover} alt="interactive banners" />}
                    </div>
                    <div className="fancy-text-content px-[55px] xs:px-[30px] xxs:px-[30px]">
                        {job?.name && <span style={{ backgroundColor: '#723030'}} className="interactivebanners-subtitle px-[15px] py-[5px] mb-[20px] rounded-[2px] text-white text-xxs font-serifx uppercase leading-4 tracking-[1px] inline-block">
                            <Translatable>
                                {job?.name}
                            </Translatable>
                        </span>}
                        {job?.major_name && <div className="interactivebanners-title mb-[10px] text-white lg:text-[18px]">
                            <Translatable>
                                {job?.major_name}
                            </Translatable>
                        </div>}
                        {job && 
                          <a href={`category/${job?.id}`}  className="btn rounded-[3px] mt-[15px]  font-serifx uppercase md:mb-[15px]" color="#232323">
                              <Translatable>
                                  Read more
                              </Translatable>
                          </a>
                        }
                    </div>
                  </div>
                )
              })}
            </motion.div>
            </>
        ) : isLoading && (
          <JobsPageSkeleton/>
        )}
      </Container>

    </div>
  )
}

export default PostPage


