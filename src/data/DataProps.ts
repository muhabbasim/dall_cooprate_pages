// export type HeroProps = {
//   // data: {
//     hero_title: string;
//     hero_title2: string;
//     hero_cta: string;
//     hero_images: any;
//     banner_component: any;
//   // }
// }; 

export type DataProps = {

  name: string;  
  logo: any;  
  logo_name_en: string;
  logo_name_ar: string;
  
  navbar: {
    navbar_routes: any;  
    name: string;  
    logo: string;  
  }

  hero: {
    hero_title: string;
    hero_title2: string;
    hero_cta: string;
    hero_images: any;
  }; 

  features: {
    feature_title: string;
    feature_sub: string;
    features_data: any;
    feature_background: any
    feature_sponsorship: boolean,
  }

  category: {
    category_title: string;
    title_sub: string;
    title_sub_desc: string;
    category_data: any;
  }

  contact: {
    contactTitle: string;
    contact_email: string;
    contact_phone: string;
    contact_location: string;
  }

  footer: {
    name: string;
    logo: string;
    footer_action: {
      desc: string;
      button: string;
    }
    footer_data: any;
  }

  action_bannar: {
    cta: string;
    logo: string;
    name: string;
  }

  theme: {
    bg_imgs: any;
    color_pallete: {
      primary: string;
      secondary: string;
      btn_primary: string;
      btn_secondary: string;
      third: string;

    };
  }

}


