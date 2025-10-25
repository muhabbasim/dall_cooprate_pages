import { motion } from 'framer-motion'
// styles
import './_blockquote.scss'
import './_dropcaps.scss'
import './_blog.scss'
import './buttonStyle.css'

// Libraries
import { Col, Row } from 'react-bootstrap'
import { Container } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'


// Data
import Sidebar from './components/Sidebar'
import Dropcaps from './components/Dropcaps'
import Blockquote from './components/Blockquote'
import EventNoteIcon from '@mui/icons-material/EventNote';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import { fadeInUp } from 'src/components/animation/GlobalAnimations'
// import backgroundImg from 'src/assets/backgrounds/home-decor-bg-img-02.webp'
import backgroundImg2 from 'src/assets/backgrounds/home-freelancer-img-06.webp'
import Translatable from 'src/components/translatable_text/Translatable'
import { useSelector } from 'src/store/Store'
import { useTranslation } from 'react-i18next'
import cooperatesData from 'src/data/CooporateData'
import { useQuery } from '@tanstack/react-query'
import api from 'src/context/apiRequest'


const PostPage = () => {
  const { t } = useTranslation();
  const location = useLocation()
  const cooperationTitle = location.pathname.split('/')[1]
  const currntLand = cooperatesData.find((land) => land.name === cooperationTitle)
  const pageId = currntLand?.name === 'performing_art' ? 'hajj-ministry' : currntLand?.name
  const rtl = useSelector(state => state.customizer.activeDir === 'rtl')

  const param = useParams();
  const jobId: any = param.id

  const { data: jobData } = useQuery({
    queryKey: ['jobs-data'],
    queryFn: async () => 
      await api().get(`/get/sector-jobs`).then((res) => {
      return res.data;
    })
  })
  
  const currntJob = jobData?.find((el: any) => el?.id === parseInt(jobId))

  return (
    <div style={{ backgroundImage: `url(${backgroundImg2})`}} className='cover-background pt-[50px]'>
      {currntJob ? (
        <>
          <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
            <Container maxWidth='lg'>
              <Row className="justify-center">
                <Col  lg={8} className="right-sidebar md:mb-[60px] sm:mb-[40px]">
                  <Row>
                      <motion.div {...fadeInUp}>
                    <Col className="blog-details-text last:mb-0 mb-24">

                      <ul className="flex justify-between mb-8 ">
                        <div className='flex gap-4'>
                            <li className=" align-middle flex gap-2">
                              <EventNoteIcon color='primary' className="feather-calendar mr-[10px]"/>
                              <span>13 May 2024</span>
                            </li>
                            <li className=" align-middle flex gap-2">
                            <FolderOpenOutlinedIcon color='primary' className="feather-folder  mr-[10px]"/>
                              <span>Hajj Ministry</span>
                            </li>  
                          {/* <li className="align-middle flex gap-2">
                            <FolderOpenOutlinedIcon color='primary' className="feather-folder  mr-[10px]"/>
                            {
                              jobData?.category?.map((item: any, i: any) => {
                                return (
                                  <Link aria-label="link" key={i} to={`#`}>
                                    <Translatable>
                                      {item}
                                    </Translatable>
                                  </Link>
                                )
                              })
                            }
                          </li> */}
                        </div>
                          
                        <li>
                          <div className="p-[5px] relative">
                            <div className="absolute inset-0 py-4 m-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm" />
                              <a href={`http://localhost:5174/auth/ministry-individual-register/${pageId}/${jobId}`} target='_blank' className="category_btn px-8 py-[10px] rounded-sm relative group transition duration-200 text-white hover:bg-transparent">
                                <Translatable>
                                  Apptitude Scale
                                </Translatable>
                              </a>
                          </div>
                        </li>
                      </ul>
                      <span className="text-2xl font-bold ">
                          <Translatable>
                            {currntJob?.name}
                          </Translatable>
                      </span>
                      <img height='200px' src={currntJob?.cover} alt="category image" className="w-full h-[500px] object-cover rounded-[6px] my-[3.5rem]"></img>
                      <p className="mb-[25px]">
                          <Translatable>
                            {currntJob?.major_name}
                          </Translatable> 
                      </p>
                      <Blockquote
                        className="my-[3.5rem] ml-24 sm:ml-0"
                        theme="blockquote-style-02"
                        title={t(`${jobData?.subContent1}`)}
                        author={t("Ministry of Hajj")}
                      />
                      {!rtl && jobData?.description ? (
                        <Dropcaps theme="dropcaps-style04" content={jobData?.description} />
                        ) : (
                          <p className="my-[25px]">
                            <Translatable>
                              {jobData?.description}
                            </Translatable>
                          </p>
                        )}
                      { jobData?.description && <p className="my-[25px]">
                          <Translatable>
                            {jobData?.description}
                          </Translatable>
                      </p>}
                    </Col>
                    </motion.div>

                  </Row>
                </Col>

                <Sidebar {...jobData}/>
              </Row>
            </Container>
          </section>

        </>
      ) : undefined}
    </div>
  )
}

export default PostPage

