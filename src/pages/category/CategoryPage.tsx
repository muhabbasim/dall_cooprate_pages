import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
// styles
import './_blockquote.scss'
import './_dropcaps.scss'
import './_blog.scss'
import './buttonStyle.css'

// Libraries
import { Col, Row } from 'react-bootstrap'
import { Container } from '@mui/material'
import { Link, useLocation, useParams } from 'react-router-dom'


// Data
import Sidebar from './components/Sidebar'
import Dropcaps from './components/Dropcaps'
import Blockquote from './components/Blockquote'
import EventNoteIcon from '@mui/icons-material/EventNote';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import { fadeInUp } from 'src/components/animation/GlobalAnimations'
// import backgroundImg from 'src/assets/backgrounds/home-decor-bg-img-02.webp'
import backgroundImg2 from 'src/assets/backgrounds/home-freelancer-img-06.webp'
import cooperatesData from 'src/data/CooporateData'
import { DataProps } from 'src/data/DataProps'
import Translatable from 'src/components/translatable_text/Translatable'
import { useSelector } from 'src/store/Store'
import { useTranslation } from 'react-i18next'


const PostPage = () => {
  const [data, setData] = useState<any>()
  const [categries, setCategries] = useState<any>()
  const { t } = useTranslation();
  const location = useLocation()
  const cooperationTitle = location.pathname.split('/')[1]
  const rtl = useSelector(state => state.customizer.activeDir === 'rtl')

  // fetch the query param
  const param = useParams();
  const categoryId: any = param.id

  useEffect(() => {
    const cooperateData = cooperatesData.find((item: DataProps) =>item.name === cooperationTitle )
    const categoryData = cooperateData?.category?.category_data?.find((item) => item.id === parseInt(categoryId))
    const categories = cooperateData?.category
    setData(categoryData);
    setCategries(categories);
  }, [categoryId])

  return (
    <div style={{ backgroundImage: `url(${backgroundImg2})`}} className='cover-background pt-[50px]'>
      {data ? (
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
                          {
                            data?.date && <li className=" align-middle flex gap-2">
                              <EventNoteIcon color='primary' className="feather-calendar mr-[10px]"/>
                              <span>{data?.date}</span>
                            </li>
                          }
                          <li className="align-middle flex gap-2">
                            <FolderOpenOutlinedIcon color='primary' className="feather-folder  mr-[10px]"/>
                            {
                              data?.category?.map((item: any, i: any) => {
                                return (
                                  <Link aria-label="link" key={i} to={`#`}>
                                    <Translatable>
                                      {item}
                                    </Translatable>
                                  </Link>
                                )
                              })
                            }
                          </li>
                        </div>
                          
                        <li>
                          <div className="p-[5px] relative">
                            <div className="absolute inset-0 py-4 m-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm" />
                              <a href="https://dall-in.com/auth/register" target='_blank' className="category_btn px-8 py-[10px] rounded-sm relative group transition duration-200 text-white hover:bg-transparent">
                                <Translatable>
                                  Talent Measurement
                                </Translatable>
                              </a>
                          </div>
                        </li>
                      </ul>
                      <span className="text-2xl font-bold ">
                          <Translatable>
                            {data.title}
                          </Translatable>
                      </span>
                      <img height='200px' src={data.contentImg} alt="category image" className="w-full h-[500px] object-cover rounded-[6px] my-[3.5rem]"></img>
                      <p className="mb-[25px]">
                          <Translatable>
                            {data.content}
                          </Translatable> 
                      </p>
                      <Blockquote
                        className="my-[3.5rem] ml-24 sm:ml-0"
                        theme="blockquote-style-02"
                        title={t(`${data?.subContent1}`)}
                        author={t(`${data?.author}`)}
                      />
                      {!rtl && data?.subContent2 ? (
                        <Dropcaps theme="dropcaps-style04" content={data?.subContent2} />
                        ) : (
                          <p className="my-[25px]">
                            <Translatable>
                              {data?.subContent2}
                            </Translatable>
                          </p>
                        )}
                      {/* { data?.subContent2 && <p className="my-[25px]">
                          <Translatable>
                            {data?.subContent2}
                          </Translatable>
                      </p>} */}
                    </Col>
                    </motion.div>

                  </Row>
                </Col>

                <Sidebar {...categries}/>
              </Row>
            </Container>
          </section>

        </>
      ) : undefined}
    </div>
  )
}

export default PostPage