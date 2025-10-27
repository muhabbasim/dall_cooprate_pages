// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Banner from 'src/components/banner/Banner';
import C2a2 from 'src/components/c2a/C2a2';
import Features from 'src/components/features/Features';
import ContactForm from 'src/components/contact/ContactForm';
import Footer from 'src/components/footer/Footer';
import { useLocation, useNavigate } from 'react-router';
import cooperatesData from 'src/data/CooporateData';

import BannerSlide from 'src/components/banner_slide/BannerSlide';
import Banner_center from 'src/components/banner_center/Banner_center';
import Definition from 'src/components/definition/Definition';
import CategoryBanner from 'src/components/major_banner/CategoryBanner';
import HajjMinistry from 'src/components/hajj_major/HajjMinistry';


const Landingpage = () => {
  const route = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.split('/')[1]
  const currenLand = cooperatesData.find((item) => item.name === pathName)

  useEffect(() => {
    if(!currenLand) {
      return route('/error_page')
    } 
  }, [currenLand]);
  
  let landBanner;
  let title;
  
  if( currenLand?.name === 'tourism_authority') {
    landBanner = <BannerSlide/>
    title = 'Duhal'
  } else if (currenLand?.name === 'performing_art') {
    landBanner = <Banner {...currenLand}/>
    title = 'Midar'
  } else if (currenLand?.name === 'armed_forces') {
    landBanner = <Banner_center/>
    title = 'Nislan'
  } else if (currenLand?.name === 'hajj-ministry') {
    landBanner = <HajjMinistry {...currenLand}/>
    title = 'hajj-ministry'
  }

  return (
    <div className='overflow-hidden'>
      { currenLand &&  (
        <PageContainer title={title} logo={currenLand.logo} description="this is Landingpage">
          <div>
            {landBanner}
          </div>
          <Definition  data={currenLand} options={currenLand?.features?.feature_sponsorship}/>
          <Features data={currenLand} options={currenLand?.features?.feature_sponsorship}/>
          <CategoryBanner {...currenLand}/>
          <div>
            {currenLand?.additional_section?.section1}
          </div>
          <ContactForm/>
          <C2a2 {...currenLand}/>
          <Footer {...currenLand}/>
        </PageContainer>
      )} 
    </div>
  );
};

export default Landingpage;
