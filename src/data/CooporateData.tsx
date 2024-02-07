import performingArtLogo from 'src/assets/performing_art/performing_art_logo.png'
import tourismAuthority from 'src/assets/tourism_autority/tourism_logo.svg'
import armedForces from 'src/assets/armed_forces/Armed_Forces.png'
import {
  IconAdjustments,
  IconArchive,
  IconCalendar,
  IconDiamond,
  IconMessages,
  IconShieldLock,
  IconTag,
  IconWand,
} from '@tabler/icons-react';
import BannerSlide from "src/components/banner_slide/BannerSlide";
import CategoryBanner from "src/components/major_banner/CategoryBanner";
import performingArtFeatureBg from 'src/assets/performing_art/bg5.avif'
import tourismFeatureBg from 'src/assets/backgrounds/home-branding-agency-bg-img-03.webp'

// sponsorship
import tourism_sponsor_logo1 from 'src/assets/tourism_autority/ministry-of-tourism.png'
import tourism_sponsor_logo2 from 'src/assets/tourism_autority/sta-logo.png'
import tourism_sponsor_logo3 from 'src/assets/tourism_autority/E3ghWRlXMAMWgI3.jpg'

// import armedForces_sponsor_logo1 from 'src/assets/armed_forces/Armed_Forces.png'
// import armedForces_sponsor_logo2 from 'src/assets/armed_forces/Royal_Saudi_Land_Forces.png'
// import armedForces_sponsor_logo3 from 'src/assets/armed_forces/h_logo.png'


//additional sections
import SimpleCategory from 'src/components/simple_category/SimpleCategory';


const cooperatesData = [
  {
    name: 'tourism_authority',
    logo_name_en: 'Duhal',
    logo_name_ar: 'دحل',
    logo: tourismAuthority,

    navbar: {
      name: 'tourism_uthority',
      logo: "tourism_uthority_logo",
      navbar_routes: [
        {
          name: 'Home',
          id:"home"
        },
        {
          name: 'Blog',
          id:"projects"
        },
        {
          name: 'Projects',
          id:"FAQ"
        },
      ]
    },

    hero: {
      hero_title: 'Reaching New Heights',
      hero_title2: 'Duhal, Journeying Towards Success',
      hero_cta: "tourism_authority_hero_title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ",
      hero_images: [
        { img: 'https://plus.unsplash.com/premium_photo-1663011062275-d9f9e2c6743a?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { img: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { img: 'https://images.unsplash.com/photo-1682685797736-dabb341dc7de?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { img: 'https://images.unsplash.com/photo-1683009427590-dd987135e66c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      ],
      banner_component: <BannerSlide/>,
    },

    features: {
      
      feature_title: "Reaching New Heights",
      feature_sub: "Duhal, Journeying Towards Success",
      feature_background: tourismFeatureBg,
      feature_sponsorship: true,
      sponsorship_data: [
        { 
          id: 1,
          name: '',
          logo: tourism_sponsor_logo1
        },
        { 
          id: 2,
          name: '',
          logo: tourism_sponsor_logo2
        },
        { 
          id: 3,
          name: '',
          logo: tourism_sponsor_logo3
        },
      ],
      features_data: [
        { 
          id: 1,
          icon: IconWand,
          title: 'Talent Potentials',
          subtext: "Unveiling the latent potential of individuals across diverse professional domains",
        },
        {
          id: 2,
          icon: IconShieldLock,
          title: 'Success Probability',
          subtext: "Furnishing relative reports assessing the probability of success within specific professional realms",
        },
        {
          id: 3,
          icon: IconArchive,
          title: 'Employment Quality',
          subtext: "Enhancing employability and elevating the quality of employment outcomes through Streamlining the connection process between entities",
        },
        {
          id: 4,
          icon: IconAdjustments,
          title: 'Fostering Creativity',
          subtext: 'Fostering impactful creativity by strategically directing energy in professional arenas',
        },
        {
          id: 5,
          icon: IconTag,
          title: 'Localized Analysis',
          subtext: "Implementing a discerning selection process grounded in localized Saudi analytical attributes",
        },
        {
          id: 7,
          icon: IconCalendar,
          title: 'Financial Optimiztion',
          subtext: "Optimizing financial expenditures through judicious investments in apt talents",
        },
        {
          id: 8,
          icon: IconMessages,
          title: 'Strategic Approaches',
          subtext: "Formulating well-suited future strategies aligned with the ever-evolving job market",
        },
        {
          id: 9,
          icon: IconDiamond,
          title: 'personalized Allocation',
          subtext: "Promoting the notion of personalized allocation for individuals and assessing their interest",
        },
        // {
        //   id: 6,
        //   icon: IconDiamond,
        //   title: 'Directing Aspiratiopns',
        //   subtext: "Assisting individuals in gauging their aspirations, thereby aiding them on the path to success",
        // },
      ]
    },

    category: {
      category_component: CategoryBanner,
      category_title: 'Discover endless stories in travel, redefine adventure, create memories',
      title_sub: "Tourism authority vision",
      title_sub_desc: "The tourism sector is considered one of the key pillars in achieving the Kingdom's Vision 2030, encompassing all its branches. The authority aims to support the growth of the travel and tourism sector by meeting the needs of tourism companies and other business partners",
      category_data: [
        {
          id: 1,
          subtitle: "Tour Guide",
          title: "Historical, cultural, and natural landmarks",
          content: "A tour guide is a professional who leads individuals or groups on tours, providing information and insights about historical, cultural, and natural landmarks. They possess in-depth knowledge of the destinations they guide, creating an engaging and informative experience for tourists",
          subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          author: '2',
          img: "https://images.unsplash.com/photo-1639763703351-c27defbb51b1?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contentImg: "https://images.unsplash.com/photo-1682695798256-28a674122872?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "13 May 2020",
          category: ["Tour Guide"],
          backgroundColor: '#db9f27',
      },
      {
          id: 2,
          subtitle: "Chef",
          title: "Crafting Delights, Savoring Moments",
          content: "Chefs are culinary experts responsible for planning, preparing, and presenting food. They can work in various settings, including restaurants, hotels, or catering services. Chefs often specialize in specific cuisines and are skilled in creating unique and delicious dishes",
          subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          author: '2',
          img: "https://images.unsplash.com/photo-1428895009712-de9e58a18409?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contentImg: "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "13 May 2020",
          category: ["Cuisines"],
          backgroundColor: '#db9f27',
          
    
      },
      {
          id: 3,
          subtitle: "Receptionist",
          title: "Elevating Hospitality, One Greeting at a Time",
          content: "Receptionists play a crucial role in the hospitality industry, serving as the first point of contact for guests. They handle reservations, check-ins, and provide information about facilities and services. Exceptional communication and customer service skills are vital in this role",
          subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          author: '2',
          img: "https://images.unsplash.com/photo-1543325042-c67825847491?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contentImg: "https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "13 May 2020",
          category: [ "Hospitality"],
          backgroundColor: '#db9f27',
      },
      {
          id: 4,
          subtitle: "Archaeological Restorer",
          title: "Reviving History, Preserving Legacy",
          content: "Archaeological restorers specialize in preserving and restoring artifacts and structures of historical significance. They use their expertise in materials, techniques, and historical context to ensure the conservation of cultural heritage for future generations",
          subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          author: '2',
          img: "https://images.unsplash.com/photo-1628074958552-7c9d0b4173b7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contentImg: "https://images.unsplash.com/photo-1540567477540-322b76aadbc6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "13 May 2020",
          category: ["Archaeologia"],
          backgroundColor: '#db9f27',
    
      },
      {
          id: 5,
          subtitle: "Accommodation Manager",
          title: "Beyond Comfort, Creating Memorable Stays",
          content: "Accommodation managers oversee the operation of lodging establishments such as hotels, resorts, or bed and breakfasts. They manage staff, coordinate guest services, and ensure the smooth running of the accommodation to provide a positive experience for guests",
          subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          author: '2',
          img: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contentImg: "https://plus.unsplash.com/premium_photo-1676320103087-4aec0a09088f?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "13 May 2020",
          category: ["Accommodation Manager"],
          backgroundColor: '#db9f27',
          
      },
      {
          id: 6,
          subtitle: "Tourism Events Organizer",
          title: "Crafting Experiences, Igniting Joys",
          content: "Professionals in this role plan and organize events within the tourism sector, such as festivals, conferences, or exhibitions. They coordinate logistics, manage budgets, and ensure that events run smoothly, contributing to the overall appeal of a destination",
          subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          author: '2',
          img: "https://plus.unsplash.com/premium_photo-1682126157704-beacbab4906f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contentImg: "https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "13 May 2020",
          category: ["Event Organization"],
          backgroundColor: '#db9f27',
    
      },
      {
          id: 7,
          subtitle: "Historical Expert",
          title: "Unveiling Stories, Nurturing Legacy",
          content: "Historical experts specialize in the study and interpretation of historical events, artifacts, and sites. They provide valuable insights into the historical context of destinations, contributing to the educational and cultural experiences of tourists",
          subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          author: '2',
          img: "https://images.unsplash.com/photo-1638199644296-1e7ae90e8339?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contentImg: "https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "13 May 2020",
          category: ["History"],
          backgroundColor: '#db9f27',
    
      },
      {
          id: 8,
          subtitle: "Hospitality Assistant",
          title: "Enhancing Hospitality, Crafting Smiles",
          content: "Hospitality assistants provide support in various areas within the hospitality industry, including housekeeping, food service, or customer service. They play a vital role in ensuring the comfort and satisfaction of guests by assisting with day-to-day operations",
          subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          author: '2',
          img: "https://images.unsplash.com/photo-1573497619951-6c9477fb83b4?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contentImg: "https://images.unsplash.com/photo-1573496545669-abf57046fcd6?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "13 May 2020",
          category: ["Hospitality"],
          backgroundColor: '#db9f27',
    
      },
      ]
    },

    contact: {  
      contactTitle: "Contact Tourism Authorization",
      contact_email: 'tourism@gmail.com',
      contact_phone:'555-3534-534534',
      contact_location: 'location.com',
    },

    footer: {
      name: 'tourism_uthority',
      logo: "tourism_uthority_logo",
      footer_action: {
        desc: 'Unlock Your Artistic Potential & its time to take the stage!',
        button: 'Book your seat'
      },
      
      footer_data: [
        {
          title: "Tourism Authorization",
          img: '',
          submenu: [
            {
                title: "About company",
                link: "/page/about-us"
            },
            {
                title: "Company services",
                link: "/page/our-services"
            },
            {
                title: "Job opportunities",
                link: "/page/our-team"
            },
            {
                title: "Contact us",
                link: "/page/contact-classic"
            },
          ]
        },
        {
          title: "customer",
          submenu: [
            {
                title: "Client support",
                link: "/page/faq-s"
            },
            {
                title: "Pricing packages",
                link: "/page/pricing-packages"
            },
            {
                title: "Company history",
                link: "/page/our-story"
            },
            {
                title: "Our process",
                link: "/page/our-process"
            },
          ]
        },
        {
          title: "Additional",
          submenu: [
            {
                title: "Our story",
                link: "/page/our-story"
            },
            {
                title: "Who we are",
                link: "/page/who-we-are"
            },
            {
                title: "Our process",
                link: "/page/our-process"
            },
            {
                title: "Latest news",
                link: "/page/latest-news"
            },
          ]
        },
        {
          title: "Services",
          submenu: [
            {

                title: "Brand experience",
                link: "/page/our-services"
            },
            {
                title: "e-Commerce website",
                link: "/page/our-services"
            },
            {
                title: "Content writing",
                link: "/page/our-services"
            },
            {
                title: "Marketing strategy",
                link: "/page/our-services"
            },
          ]
        },
        {
          title: "Resources",
          submenu: [
            {
                title: "Theme guide",
                link: "/page/faq-s"
            },
            {
                title: "Support desk",
                link: "/page/faq-s"
            },
            {
                title: "What we offer",
                link: "/page/what-we-offer"
            },
            {
                title: "Company history",
                link: "/page/our-story"
            },
          ]
        },
        {
          title: "Categories",
          submenu: [
            {
                title: "For men",
                link: "/shop/shop-wide"
            },
            {
                title: "For woman",
                link: "/shop/shop-wide"
            },
            {
                title: "Accessories",
                link: "/shop/shop-wide"
            },
            {
                title: "Collections",
                link: "/shop/shop-wide"
            },
          ]
        },
        {
          title: "Adavantages",
          submenu: [
            {
                title: "Free delivery",
                link: "/page/faq-s"
            },
            {
                title: "100 days refund",
                link: "/page/faq-s"
            },
            {
                title: "Multiple payments",
                link: "/page/faq-s"
            },
            {
                title: "Sustainable",
                link: "/page/faq-s"
            },
          ]
        },
      ]
    },
    
    action_bannar: {
      cta: "tourism_authority_hero_desc",
      name: 'tourism_uthority',
      logo: "tourism_uthority_logo",
      
    },

    theme: {
      bg_imgs: 'https://images.unsplash.com/photo-1682685796852-aa311b46f50d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      color_pallete: {
        primary: '#f7f7f7',
        secondary: '#cccccc',
        third: '#ffa500',
        btn_primary: '#80b9bb',
        btn_secondary: '#133240'
      }
    }, 
    
  },
  {
    name: 'performing_art',
    logo_name_en: 'Midar',
    logo_name_ar: 'ميدار',
    logo: performingArtLogo,

    navbar: {
      name: 'performing_art',
      logo: "performing_art_logo",
      // navbar_component: <LpHeader/>,
      navbar_routes: [
        {
          name: 'Home',
          id:"home"
        },
        {
          name: 'about us',
          id:"projects"
        },
        {
          name: 'location ',
          id:"FAQ"
        },
        {
          name: 'contact us ',
          id:"FAeQ"
        },
      ]
    },

    hero: {
      hero_title: 'Unlock Your Artistic Potential &',
      hero_title2: 'Its time to take the stage!',
      hero_cta: 'The assessment of artistic abilities forms the cornerstone of success in the performing arts. Recognizing these capabilities is fundamental to achieving excellence on the stage',
      hero_images: [
        { img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { img: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { img: 'https://images.unsplash.com/photo-1682685797736-dabb341dc7de?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { img: 'https://images.unsplash.com/photo-1683009427590-dd987135e66c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      ],
    },

    features: {
      
      feature_title: "Midar Milestones",
      feature_sub: "Midar's Ambitious Aspirations Reflected in the Project Features",
      feature_background: performingArtFeatureBg,
      feature_sponsorship: false,
      sponsorship_data: [
        { 
          id: 1,
          name: '',
          logo: "",
        },
        { 
          id: 2,
          name: '',
          logo: "",
        },
        { 
          id: 3,
          name: '',
          logo: "",
        },
      ],
      features_data: [
        { 
          id: 1,
          icon: IconWand,
          title: 'Talent Potentials',
          subtext: "Unveiling the latent potential of individuals across diverse professional domains",
        },
        {
          id: 2,
          icon: IconShieldLock,
          title: 'Success Probability',
          subtext: "Furnishing relative reports assessing the probability of success within specific professional realms",
        },
        {
          id: 3,
          icon: IconArchive,
          title: 'Employment Quality',
          subtext: "Enhancing employability and elevating the quality of employment outcomes through Streamlining the connection process between entities",
        },
        {
          id: 4,
          icon: IconAdjustments,
          title: 'Fostering Creativity',
          subtext: 'Fostering impactful creativity by strategically directing energy in professional arenas',
        },
        {
          id: 5,
          icon: IconTag,
          title: 'Localized Analysis',
          subtext: "Implementing a discerning selection process grounded in localized Saudi analytical attributes",
        },
        {
          id: 7,
          icon: IconCalendar,
          title: 'Financial Optimiztion',
          subtext: "Optimizing financial expenditures through judicious investments in apt talents",
        },
        {
          id: 8,
          icon: IconMessages,
          title: 'Strategic Approaches',
          subtext: "Formulating well-suited future strategies aligned with the ever-evolving job market",
        },

        // {
        //   id: 9,
        //   icon: IconDiamond,
        //   title: 'personalized Allocation',
        //   subtext: "Promoting the notion of personalized allocation for individuals and assessing their interest",
        // },
        {
          id: 6,
          icon: IconDiamond,
          title: 'Directing Aspiratiopns',
          subtext: "Assisting individuals in gauging their aspirations, thereby aiding them on the path to success",
        },
      ]
    },

    category: {
      category_component: CategoryBanner,
      category_title: 'Experience the magic of performing arts, where every stage is a canvas for masterpieces to unfold',
      title_sub: "Performing art vision",
      title_sub_desc: "Stimulating the development of the theater and performing arts sectors, fostering them through empowering Saudi talents to build successful careers and create content that inspires the audience",
      category_data: [
        {
          id: 1,
          subtitle: "Playwright",
          title: "The playwright is the architect of the theatrical experience",
          content: "The playwright is the architect of the theatrical experience. They craft the script, developing the narrative, characters, and dialogue. Playwrights often explore themes, convey emotions, and create compelling stories that will be brought to life on stage",
          subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
          author: '2',
          img: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contentImg: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "13 May 2020",
          category: [ "Playwriter"],
          backgroundColor: '#723030',
        },
        {
            id: 2,
            subtitle: "Director",
            title: "The director is like the conductor of an orchestra",
            content: "The director is like the conductor of an orchestra, overseeing the entire production. They interpret the script, make creative decisions, guide actors in their performances, and collaborate with other creatives to bring a cohesive vision to the stage",
            subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            author: '2',
            img: "https://images.unsplash.com/photo-1600353771864-06224b16e1a3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contentImg: "https://images.unsplash.com/photo-1600353771864-06224b16e1a3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTitle: "View information",
            btnLink: "/page/what-we-offer",
            date: "13 May 2020",
            category: [ "Director"],
          backgroundColor: '#723030',
      
        },
        {
            id: 3,
            subtitle: "Theatrical Lighting Engineer",
            title: "Lighting engineers design and execute the lighting plan for a production",
            content: "Lighting engineers design and execute the lighting plan for a production. They use various lighting instruments, colors, and intensities to create ambiance, highlight actors, and evoke emotions. Lighting engineers play a crucial role in enhancing the visual elements of a performance",
            subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            author: '2',
            img: "https://images.unsplash.com/photo-1581090581711-6c7643ef8c05?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contentImg: "https://images.unsplash.com/photo-1581090581711-6c7643ef8c05?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTitle: "View information",
            btnLink: "/page/what-we-offer",
            date: "13 May 2020",
            category: [ "Lighting Engineer"],
          backgroundColor: '#723030',
        },
        {
            id: 4,
            subtitle: "Theatrical Production",
            title: "Theatrical production involves the entire process of bringing a play to life",
            content: "Theatrical production involves the entire process of bringing a play to life. It encompasses pre-production tasks such as script development and casting, as well as the technical aspects like set design, costume creation, lighting, sound, and the actual staging of the performance",
            subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            author: '2',
            img: "https://images.unsplash.com/photo-1525009901332-a69f4c0d3efe?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contentImg: "https://images.unsplash.com/photo-1525009901332-a69f4c0d3efe?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTitle: "View information",
            btnLink: "/page/what-we-offer",
            date: "13 May 2020",
            category: [ "Production"],
          backgroundColor: '#723030',
      
        },
        {
            id: 5,
            subtitle: "Actor",
            title: "Actors are the heart of a production",
            content: "Actors are the heart of a production. They interpret characters, memorize lines, and convey emotions to engage the audience. Through their performances, actors bring the playwright's vision to life and contribute significantly to the overall impact of a play",
            subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            author: '2',
            img: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contentImg: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTitle: "View information",
            btnLink: "/page/what-we-offer",
            date: "13 May 2020",
            category: [ "Actor"],
          backgroundColor: '#723030',
            
        },
        {
            id: 6,
            subtitle: "Theatrical Makeup Artist",
            title: "Makeup artists use cosmetics and prosthetics to transform actors into characters",
            content: "Makeup artists use cosmetics and prosthetics to transform actors into characters. They consider the time period, setting, and character traits to create visually convincing makeup that complements the overall design of the production",
            subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            author: '2',
            contentImg: "https://images.unsplash.com/photo-1613966802194-d46a163af70d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTitle: "View information",
            btnLink: "/page/what-we-offer",
            date: "13 May 2020",
            category: [ "Makeup Artist"],
          backgroundColor: '#723030',
      
        },
        {
            id: 7,
            subtitle: "Costume Designer",
            title: "Weaving threads of creativity to transform characters into visual masterpieces",
            content: "Makeup artists use cosmetics and prosthetics to transform actors into characters. They consider the time period, setting, and character traits to create visually convincing makeup that complements the overall design of the production.",
            subContent1: "Costume designers are creative professionals responsible for designing and creating costumes for theatrical productions, films, television shows, and other performances. They work closely with directors, producers, and other members of the creative team to bring characters to life through clothing. Costume designers consider the time period, setting, and character personalities to develop costumes that enhance the visual storytelling of the production. Their tasks include researching historical and cultural elements, sketching designs, selecting fabrics, overseeing costume fittings, and collaborating with other departments to ensure a cohesive visual aesthetic",
            subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            author: '2',
            img: "https://images.unsplash.com/photo-1596609548164-aee7658cb54f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contentImg: "https://images.unsplash.com/photo-1589785242611-9c8b4c5eb504?q=80&w=3281&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTitle: "View information",
            btnLink: "/page/what-we-offer",
            date: "13 May 2020",
            category: ["Costume Designer"],
          backgroundColor: '#723030',
      
        },
        {
            id: 8,
            subtitle: "Theatrical Movement Designer",
            title: "Movement designers choreograph physical movements to enhance storytelling",
            content: "Movement designers choreograph physical movements to enhance storytelling. This may include dance sequences, fight choreography, or stylized movements that contribute to the overall artistic expression of the performance",
            subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            author: '2',
            img: "https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contentImg: "https://images.unsplash.com/photo-1511715282680-fbf93a50e721?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTitle: "View information",
            btnLink: "/page/what-we-offer",
            date: "13 May 2020",
            category: ["Movement Designer"],
          backgroundColor: '#723030',
      
        },
        {
            id: 9,
            subtitle: "Performing Arts",
            title: "Live performances where artists showcase their talents",
            content: "Performing arts encompass a broad range of disciplines, including theater, dance, music, and more. It's an umbrella term for live performances where artists showcase their talents, providing audiences with unique and engaging experiences",
            subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            author: '2',
            img: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contentImg: "https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTitle: "View information",
            btnLink: "/page/what-we-offer",
            date: "13 May 2020",
            category: ["Performing Arts"],
          backgroundColor: '#723030',
      
        },
        {
            id: 10,
            subtitle: "Sound Engineer",
            title: "The audio elements of a production management",
            content: "Sound engineers design and manage the audio elements of a production. They ensure that dialogue, music, and sound effects are clear and appropriately balanced. Sound engineers play a crucial role in creating an immersive auditory experience for the audience",
            subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            author: '2',
            img: "https://images.unsplash.com/photo-1551712744-1963ba88d303?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contentImg: "https://images.unsplash.com/photo-1541592553160-82008b127ccb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTitle: "View information",
            btnLink: "/page/what-we-offer",
            date: "13 May 2020",
            category: ["Sound Engineer"],
          backgroundColor: '#723030',
      
        },
        {
            id: 11,
            subtitle: "Theatrical Music Composer",
            title: "Composers create original musical scores",
            content: "Composers create original musical scores or adapt existing music to complement the production. Their compositions enhance the emotional impact of scenes, contribute to the atmosphere, and add depth to the overall auditory experience",
            subContent1: "Subcontent Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            subContent2: "Subcontent1 Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
            author: '2',
            img: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contentImg: "https://images.unsplash.com/photo-1612011956646-413fa100924c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            btnTitle: "View information",
            btnLink: "/page/what-we-offer",
            date: "13 May 2020",
            category: ["Theatrical Music Composer"],
          backgroundColor: '#723030',
      
        },
      ]
    },

    contact: {  
      contactTitle: "Contact Tourism Authorization",
      contact_email: 'tourism@gmail.com',
      contact_phone:'555-3534-534534',
      contact_location: 'location.com',
      
    },

    footer: {
      name: 'tourism_uthority',
      logo: "tourism_uthority_logo",
      footer_action: {
        desc: 'Unlock Your Artistic Potential & its time to take the stage!',
        button: 'Book your seat'
      },
      
      footer_data: [
        {
          title: "Tourism Authorization",
          img: '',
          submenu: [
            {
                title: "About company",
                link: "/page/about-us"
            },
            {
                title: "Company services",
                link: "/page/our-services"
            },
            {
                title: "Job opportunities",
                link: "/page/our-team"
            },
            {
                title: "Contact us",
                link: "/page/contact-classic"
            },
          ]
        },
        {
          title: "customer",
          submenu: [
            {
                title: "Client support",
                link: "/page/faq-s"
            },
            {
                title: "Pricing packages",
                link: "/page/pricing-packages"
            },
            {
                title: "Company history",
                link: "/page/our-story"
            },
            {
                title: "Our process",
                link: "/page/our-process"
            },
          ]
        },
        {
          title: "Additional",
          submenu: [
            {
                title: "Our story",
                link: "/page/our-story"
            },
            {
                title: "Who we are",
                link: "/page/who-we-are"
            },
            {
                title: "Our process",
                link: "/page/our-process"
            },
            {
                title: "Latest news",
                link: "/page/latest-news"
            },
          ]
        },
        {
          title: "Services",
          submenu: [
            {

                title: "Brand experience",
                link: "/page/our-services"
            },
            {
                title: "e-Commerce website",
                link: "/page/our-services"
            },
            {
                title: "Content writing",
                link: "/page/our-services"
            },
            {
                title: "Marketing strategy",
                link: "/page/our-services"
            },
          ]
        },
        {
          title: "Resources",
          submenu: [
            {
                title: "Theme guide",
                link: "/page/faq-s"
            },
            {
                title: "Support desk",
                link: "/page/faq-s"
            },
            {
                title: "What we offer",
                link: "/page/what-we-offer"
            },
            {
                title: "Company history",
                link: "/page/our-story"
            },
          ]
        },
        {
          title: "Categories",
          submenu: [
            {
                title: "For men",
                link: "/shop/shop-wide"
            },
            {
                title: "For woman",
                link: "/shop/shop-wide"
            },
            {
                title: "Accessories",
                link: "/shop/shop-wide"
            },
            {
                title: "Collections",
                link: "/shop/shop-wide"
            },
          ]
        },
        {
          title: "Adavantages",
          submenu: [
            {
                title: "Free delivery",
                link: "/page/faq-s"
            },
            {
                title: "100 days refund",
                link: "/page/faq-s"
            },
            {
                title: "Multiple payments",
                link: "/page/faq-s"
            },
            {
                title: "Sustainable",
                link: "/page/faq-s"
            },
          ]
        },
      ]
    },
    
    action_bannar: {
      cta: "tourism_authority_hero_desc",
      name: 'tourism_uthority',
      logo: "tourism_uthority_logo",
      
    },

    theme: {
      bg_imgs: ('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') ,
      
      // bg_imgs: "",
      color_pallete: {
        primary: '#f7f7f7',
        secondary: '#cccccc',
        third: '#ffa500',
        btn_primary: '#80b9bb',
        btn_secondary: '#133240'
      }
    }, 

    
  },
  {
    name: 'armed_forces',
    logo_name_en: 'Nislan',
    logo_name_ar: 'نسلان',
    logo: armedForces,

    navbar: {
      name: 'performing_art',
      logo: "performing_art_logo",
      // navbar_component: <LpHeader/>,
      navbar_routes: [
        {
          name: 'Home',
          id:"home"
        },
        {
          name: 'about us',
          id:"projects"
        },
        {
          name: 'location ',
          id:"FAQ"
        },
        {
          name: 'contact us ',
          id:"FAeQ"
        },
      ]
    },

    hero: {
      hero_title: 'Unlock Your Artistic Potential &',
      hero_title2: 'Discover the world!',
      hero_cta: 'The assessment of artistic abilities forms the cornerstone of success in the performing arts. Recognizing these capabilities is fundamental to achieving excellence on the stage',
      hero_images: [
        { img: 'https://images.unsplash.com/photo-1593625240542-8342965fe160?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      ],
    },

    features: {
      feature_title: "Nislan Milestones",
      feature_sub: "Nislan's Ambitious Aspirations Reflected in the Project Features",
      feature_background: tourismFeatureBg,
      feature_sponsorship: true,
      sponsorship_data: [
        { 
          id: 1,
          name: '',
          logo: tourism_sponsor_logo1
        },
        { 
          id: 2,
          name: '',
          logo: tourism_sponsor_logo2
        },
        { 
          id: 3,
          name: '',
          logo: tourism_sponsor_logo3
        },
      ],

      features_data: [
        { 
          id: 1,
          icon: IconWand,
          title: 'Talent Potentials',
          subtext: "Unveiling the latent potential of individuals across saudi armed forces divisions",
        },
        {
          id: 2,
          icon: IconShieldLock,
          title: 'Success Probability',
          subtext: "Furnishing relative reports assessing the probability of success within specific armed forces division",
        },
        {
          id: 3,
          icon: IconArchive,
          title: 'Employment Quality',
          subtext: "Enhancing recruitement and elevating the quality of recruitement outcomes through Streamlining the connection process between  armed forces entities",
        },
        {
          id: 4,
          icon: IconAdjustments,
          title: 'Fostering Creativity',
          subtext: 'Fostering impactful creativity by strategically directing energy in professional arenas',
        },
        {
          id: 5,
          icon: IconTag,
          title: 'Localized Analysis',
          subtext: "Implementing a discerning selection process grounded in localized Saudi analytical attributes",
        },
        {
          id: 7,
          icon: IconCalendar,
          title: 'Financial Optimiztion',
          subtext: "Optimizing financial expenditures through judicious investments in the recruitment process",
        },
        {
          id: 8,
          icon: IconMessages,
          title: 'Strategic Approaches',
          subtext: "Formulating well-suited future strategies aligned with the ever-evolving armed forces requirement",
        },
        {
          id: 6,
          icon: IconDiamond,
          title: 'Directing Aspiratiopns',
          subtext: "Assisting individuals in gauging their aspirations, thereby aiding them on the path to success",
        },
      ]
    },

    category: {
      category_component: CategoryBanner,
      category_title: 'Saudi Armed Forces Divisions & NISLAN initiative',
      title_sub: "NISLAN initiative",
      title_sub_desc: "NISLAN service is an effective initiative that assists the armed forces in the process of selecting military specializations for their members after conducting screening and obtaining initial approval. This service relies on advanced and precise analytical criteria aimed at guiding individuals toward specializations that align with their skills and interests, thereby enhancing the effectiveness and efficiency of the armed forces",
      category_data: [
        {
          id: 1,
          subtitle: "The Royal Saudi Land Forces",
          title: "the impregnable fortress, and the mighty shield",
          content: "The Royal Saudi Land Forces, the impregnable fortress, and the mighty shield, constitute the nucleus of the Saudi military forces. It was the first organized military force to emerge in the region. Thus, the Royal Saudi Land Forces serve as the solid foundation upon which our national military forces have risen, including the pride of the nation, the Royal Saudi Land Forces. It is the result of the dedication and efforts of its strong leaders, manifesting in its continuous development in organization, administration, training, and armament",
          subContent1: "Under the leadership of the founder, King Abdulaziz bin Abdulrahman Al Saud – may his soul rest in peace – the first organization of the Royal Saudi Land Forces was formed. It started as a small army of sixty men, equivalent to an infantry unit today. It later evolved into two warrior brigades, the Jihad Army (men of the urban areas) and the Brotherhood Army (men of the desert), forming the initial nucleus of what was then called the Saudi Arab Army. In the year 1348 AH (1929 CE), recognizing the necessity to modernize in terms of organization and armament, the founder ordered the formation of the first nucleus of the regular Saudi Army with three sectors named Infantry, Artillery, and Machine Guns",
          subContent2: "In the year 1396 AH, directives were issued by His Royal Highness Prince Sultan bin Abdulaziz Al Saud, the Minister of Defense and Aviation and Inspector General – may he rest in peace – to change the name from the (Saudi Arab Army) to the (Royal Saudi Land Forces). It became equipped with the latest advanced military weapons, including tanks, armored vehicles, rocket launchers, personnel carriers, vertical aviation, and supporting mechanized and armored vehicles, suitable for the geographical nature and terrain of the Kingdom. The Royal Saudi Land Forces are entrusted with the mission of protecting the Two Holy Mosques",
          author: 'Saudi Armed Forces',
          img: "http://www.mod.gov.sa/Sectors/Rslf/Photos/PublishingImages/%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%A9-1.jpeg",
          contentImg: "http://www.mod.gov.sa/Sectors/Rslf/Photos/PublishingImages/%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%A9-4.jpg",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "17/11/1439",
          category: [ "Land Forces"],
          backgroundColor: '#03632f',
        },
        {
          id: 2,
          subtitle: "The Royal Suadi Air Force",
          title: "Defending the airspace of the Kingdom of Saudi Arabia",
          content: "The Royal Saudi Air Force serves as the formidable arm of the Saudi Armed Forces, defending the airspace of the Kingdom of Saudi Arabia and safeguarding it from any potential threat. Since its inception, it has received significant attention and care from the leaders, given its prominent role in securing the kingdom's airspace against any potential danger. This is achieved through possessing the world's best fighter jets, which are considered the black horse in the realm of modern warfare, decisively determining the outcomes of battles",
          subContent1: "In this context, the Air Force has been committed to updating and enhancing its air systems, as well as ensuring the acquisition of modern fighter jets. This is due to their flexibility in movement, ease of maneuvering, and the ability to respond rapidly. This focus on armament and modernization is complemented by efforts in qualification, training, and development. The Air Force has established a college for training and educating students in aviation arts, along with an institute for maintenance and operations. These institutions aim to qualify and train the youth of the nation in the maintenance and operation of its air systems with competence and prowess",
          subContent2: "",
          author: 'Saudi Armed Forces',
          img: "http://www.mod.gov.sa/Sectors/Rsaf/Photos/PublishingImages/%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%AC%D9%88%D9%8A%D8%A9-162.jpg",
          contentImg: "http://www.mod.gov.sa/Sectors/Rsaf/Photos/PublishingImages/%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%AC%D9%88%D9%8A%D8%A9-160.jpg",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "10/10/1439",
          category: ["Air Force"],
          backgroundColor: '#03632f',
        },
        {
          id: 3,
          subtitle: "The Royal Saudi Navy Forces",
          title: "Defending the security and safety of the territory of the Kingdom of Saudi Arabia and its regional waters",
          content: "the government of the Kingdom of Saudi Arabia established a naval force tasked with defending the security and safety of the territory of the Kingdom of Saudi Arabia and its regional waters. The inception of the Royal Saudi Naval Forces dates back to the years 1376/1377 AH, initially named the Naval Force. In 1380 AH, the Riyadh patrol boat joined the naval service, marking the first maritime asset owned by the Royal Saudi Naval Forces. Since then, the Kingdom has achieved significant advancements, representing substantial leaps in the development of its military and naval capabilities",
          subContent1: "The Royal Saudi Naval Forces possess two important fleets: the Eastern Fleet on the Arabian Gulf and the Western Fleet on the Red Sea. Each fleet comprises a complete military force, including combat ship units, support and administrative support units, aviation marine units, marine infantry, and special naval security units, Recognizing the importance of human resources development through education and training, the Royal Saudi Naval Forces established King Fahd Naval College, the Technical Studies Institute, naval schools, marine infantry school, and special naval security units school, in addition to maritime training centers. Since its establishment, the Royal Saudi Naval Forces have been committed to fulfilling their duties and responsibilities, defending the nation's borders, and participating in international naval alliances to promote peace and security in the region",
          subContent2: "",
          author: 'Saudi Armed Forces',
          img: "http://www.mod.gov.sa/Sectors/Navy/Photos/PublishingImages/RSNF%2015.jpg",
          contentImg: "http://www.mod.gov.sa/Sectors/Navy/Photos/PublishingImages/RSNF%2016.jpg",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "17/11/1439",
          category: ["Navy Forces"],
          backgroundColor: '#03632f',
        },
        {
          id: 4,
          subtitle: "Strategic Missile Force",
          title: "Ballistic missiles are considered crucial and strategic weapons",
          content: "Ballistic missiles are considered crucial and strategic weapons sought by nations worldwide since World War II. This weapon has captured global attention, especially during the military arms race between the East and the West. In light of potential threats and guided by the visionary leadership and wisdom of the ruling authorities known for their equilibrium, the Kingdom of Saudi Arabia swiftly acquired this type of strategic weapon to defend its territories and interests. This initiative took place during the reign of the Custodian of the Two Holy Mosques, King Fahd bin Abdulaziz (may God have mercy on him), in the third of Muharram of the year 1407 Hijri",
          subContent1: "To contribute alongside other branches of the armed forces in reinforcing peace and deterring aggression against the security and interests of the Kingdom, the 'Saqer' project was launched. 'Saqer' is the codename for the Strategic Missile Force, named after the island falcon, King Abdulaziz bin Abdul Rahman (may God rest his soul). Once the project was completed, the force was officially named the Strategic Missile Force, marking a turning point in the Kingdom's defense strategy. Thanks to the support of Allah and the backing of the ruling authorities, this force has become capable, by the grace of God, of deterring the enemy and continuing its path of construction and contribution, Under the auspices of the Custodian of the Two Holy Mosques, King Salman bin Abdulaziz, the Supreme Commander of all military forces, and his trusted Crown Prince, the Deputy Prime Minister, and Minister of Defense, Prince Mohammed bin Salman, may God protect them, the Strategic Missile Force remains steadfast in maintaining events at a level capable of deterring the enemy and advancing the journey of construction and giving, with God's preservation",
          subContent2: "",
          author: 'Saudi Armed Forces',
          img: "http://www.mod.gov.sa/Sectors/missiles/Photos/PublishingImages/MODA-PIC-78.png",
          contentImg: "http://www.mod.gov.sa/Sectors/missiles/Photos/PublishingImages/MODA-PIC-76.png",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "17/11/1439",
          category: ["Missile Force"],
          backgroundColor: '#03632f',
        },
        {
          id: 5,
          subtitle: "Medical Services",
          title: "A sustainable health community for the personnel of the Ministry of Defense and their families",
          content: "The Armed Forces Medical Services improves all facilities of the armed forces health-care units. It also coordinates with the leaders of the armed forces of branches to raise awareness of health, provide preventive services and medical care for all the armed forces members and their families",
          subContent1: "The organization of the Armed Forces in the Kingdom of Saudi Arabia led to the establishment of the Army Medical Corps in Taif in 1367 AH. Initially, it was a clinic with a capacity of ten beds. In 1370 AH, its name was changed to Military Health, and in 1371 AH, the Prince Mansour Military Hospital in Taif was inaugurated with a capacity of 36 beds. The capacity was later increased to one hundred (100) beds by the end of the year. In 1373 AH, the Prince Mishal Hospital in Al-Kharj was opened, and in the same year, the Armed Forces Hospital in Riyadh was inaugurated. On 29/12/1392 AH, a royal decree was issued by His Royal Highness, the Minister of Defense, Aviation, and Inspector General, amending the name to the General Administration of Medical Services for the Armed Forces. Its services expanded to include all branches of the armed forces, and it gained an independent budget starting from the fiscal year 1394/1395 AH",
          subContent2: "",
          author: 'Saudi Armed Forces',
          img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contentImg: "https://msd.med.sa/ar/MediaCenter/ImageLibrary/PublishingImages/%D8%B5%D9%88%D8%B1%20%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9/%D8%B5%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9%204.jpg",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "17/11/1439",
          category: ["Medical Services"],
          backgroundColor: '#03632f',
        },
        {
          id: 6,
          subtitle: "Royal Saudi Air Defense Forces",
          title: "Self-Control of Airspace and Air Superiority",
          content: "The importance of the armed forces, in general, and the Royal Saudi Air Defense Forces, in particular, increases in a vast and diverse continent like the Kingdom of Saudi Arabia, which hosts the holiest Islamic sites and occupies a unique strategic position in the world. This necessitates dedicating attention to the Air Defense Forces. Experiences have shown that the stronger and more effective the Air Defense Forces are, the more it enhances self-control of airspace and weakens the enemy's chances of achieving any level of air superiority",
          subContent1: "The Air Defense had its beginnings in 1375 AH within the formation of the Artillery Corps in the Land Forces. In 1386 AH, it was decided to separate Air Defense from the Artillery Corps, becoming an independent branch (Air Defense). In 1403 AH, it was decided to directly link the Air Defense to the Chief of the General Staff under the name (Air Defense). In 1404 AH, the royal orders were issued to establish the Air Defense as an independent force under the name (Royal Saudi Air Defense Forces) due to the increasing areas of its responsibilities and the complexity of its relationships with other branches of the armed forces. It stands side by side with the Land Forces, the Air Force, and the Navy within the organizational structure of the Saudi Armed Forces",
          subContent2: "The leadership of the Air Defense is responsible for organizing, preparing, and building formations for field and educational units, such as Air Defense groups, the Air Defense Forces Institute, the Maintenance and Technical Support Base, and the Air Defense Forces Center and School",
          author: 'Saudi Armed Forces',
          img: "http://www.mod.gov.sa/Sectors/Air/Photos/PublishingImages/MODA-PIC-43.png",
          contentImg: "http://www.mod.gov.sa/Sectors/Air/Photos/PublishingImages/MODA-PIC-44.png",
          btnTitle: "View information",
          btnLink: "/page/what-we-offer",
          date: "17/11/1439",
          category: ["Air Defense Forces"],
          backgroundColor: '#03632f',
        },

      ]
    },

    contact: {  
      contactTitle: "Contact Tourism Authorization",
      contact_email: 'tourism@gmail.com',
      contact_phone:'555-3534-534534',
      contact_location: 'location.com',
      
    },

    footer: {
      name: 'armed_forces',
      logo: "armed_forces_logo",
      footer_action: {
        desc: 'Unlock Your Artistic Potential & Discover the world!',
        button: 'Book your seat'
      },
      
      footer_data: [
        {
          title: "Tourism Authorization",
          img: '',
          submenu: [
            {
                title: "About company",
                link: "/page/about-us"
            },
            {
                title: "Company services",
                link: "/page/our-services"
            },
            {
                title: "Job opportunities",
                link: "/page/our-team"
            },
            {
                title: "Contact us",
                link: "/page/contact-classic"
            },
          ]
        },
        {
          title: "customer",
          submenu: [
            {
                title: "Client support",
                link: "/page/faq-s"
            },
            {
                title: "Pricing packages",
                link: "/page/pricing-packages"
            },
            {
                title: "Company history",
                link: "/page/our-story"
            },
            {
                title: "Our process",
                link: "/page/our-process"
            },
          ]
        },
        {
          title: "Additional",
          submenu: [
            {
                title: "Our story",
                link: "/page/our-story"
            },
            {
                title: "Who we are",
                link: "/page/who-we-are"
            },
            {
                title: "Our process",
                link: "/page/our-process"
            },
            {
                title: "Latest news",
                link: "/page/latest-news"
            },
          ]
        },
        {
          title: "Services",
          submenu: [
            {

                title: "Brand experience",
                link: "/page/our-services"
            },
            {
                title: "e-Commerce website",
                link: "/page/our-services"
            },
            {
                title: "Content writing",
                link: "/page/our-services"
            },
            {
                title: "Marketing strategy",
                link: "/page/our-services"
            },
          ]
        },
        {
          title: "Resources",
          submenu: [
            {
                title: "Theme guide",
                link: "/page/faq-s"
            },
            {
                title: "Support desk",
                link: "/page/faq-s"
            },
            {
                title: "What we offer",
                link: "/page/what-we-offer"
            },
            {
                title: "Company history",
                link: "/page/our-story"
            },
          ]
        },
        {
          title: "Categories",
          submenu: [
            {
                title: "For men",
                link: "/shop/shop-wide"
            },
            {
                title: "For woman",
                link: "/shop/shop-wide"
            },
            {
                title: "Accessories",
                link: "/shop/shop-wide"
            },
            {
                title: "Collections",
                link: "/shop/shop-wide"
            },
          ]
        },
        {
          title: "Adavantages",
          submenu: [
            {
                title: "Free delivery",
                link: "/page/faq-s"
            },
            {
                title: "100 days refund",
                link: "/page/faq-s"
            },
            {
                title: "Multiple payments",
                link: "/page/faq-s"
            },
            {
                title: "Sustainable",
                link: "/page/faq-s"
            },
          ]
        },
      ]
    },
    
    action_bannar: {
      cta: "tourism_authority_hero_desc",
      name: 'tourism_uthority',
      logo: "tourism_uthority_logo",
      
    },

    theme: {
      bg_imgs: ('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') ,
      
      // bg_imgs: "",
      color_pallete: {
        primary: '#f7f7f7',
        secondary: '#cccccc',
        third: '#ffa500',
        btn_primary: '#80b9bb',
        btn_secondary: '#133240'
      }
    }, 

    additional_section: {
      section1: <SimpleCategory/>
    }
  },
]

export default cooperatesData;