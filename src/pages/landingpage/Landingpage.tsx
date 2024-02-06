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
import CategoryBanner from 'src/components/major_banner/CategoryBanner';
import Banner_center from 'src/components/banner_center/Banner_center';

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

  if( currenLand?.name === 'tourism_authority') {
    landBanner = <BannerSlide/>
  } else if (currenLand?.name === 'performing_art') {
    landBanner = <Banner {...currenLand}/>
  } else if (currenLand?.name === 'armed_forces') {
    landBanner = <Banner_center/>
  }

  
  return (
    <>
      { currenLand &&  (
        <PageContainer title="Landingpage" description="this is Landingpage">
          <div>
            {landBanner}
          </div>
          <Features data={currenLand} options={currenLand?.features?.feature_sponsorship}/>
          <CategoryBanner {...currenLand}/>
          <ContactForm/>
          <C2a2 {...currenLand}/>
          <Footer {...currenLand}/>
        </PageContainer>
      )} 
    </>
  );
};

export default Landingpage;
