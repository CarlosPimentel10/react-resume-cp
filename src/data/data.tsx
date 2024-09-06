import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import profilepic from '../images/cp-pic.jpg';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Carlos Pimentel.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Porto, Portugal based <strong className="text-stone-100">Full Stack Software Developer</strong>, currently working
        at <strong className="text-stone-100">Sovos</strong> helping in API integration and configuration issues.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me drawing <strong className="text-stone-100">Graphite Pencil</strong>,
        listening<strong className="text-stone-100"> great music</strong>, or exploring beautiful beaches.
        <strong className="text-stone-100"> Porto, Portugal</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a natural artist, love drawing from my childhood. I am very good with learning new languages and interacting with diferrent people.
  I started my career as Business Analyst in 2006. I just enjoy GIS and web technologies i.e.: JavaScript, NodeJS, MongoDB, Express, React JS and Python. 
  Being able to work on a project and see it come to life is one the things that drive me to pursuit engineering projects.`,
  aboutItems: [
    {label: 'Location', text: 'Marco de Canaveses, Porto', Icon: MapIcon},
    {label: 'Age', text: '38', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Angolan / Portugal Resident', Icon: FlagIcon},
    {label: 'Interests', text: 'Reallistic Drawing / Classical Music', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Beira Interior', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Sovos', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: "Portuguese",
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 3,
      },
      {
        name: 'Spanish',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React JS',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 3,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },

      {
        name: "Express",
        level: 5,
      },
      {
        name: "Python",
        level: 7,
      },

    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: "MongoDB",
        level: 5,
      },
      {
        name: "Oracle",
        level: 8,
      },
      {
        name: "MySql",
        level: 8,
      },
      {
        name: "PostGreSQL",
        level: 8,
      },

    ]
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Simple MERN Project',
    description: 'MERN, With Docker and Jenkins CI/CD and JWT.',
    url: 'https://github.com/CarlosPimentel10/mern_auth_backend',
    image: porfolioImage1,
  },
  {
    title: 'RESTFULL Django API For a Restaurant',
    description: 'This is a course based project from Udemy on a restful api for a restaurant management system using originally\
    the google maps  api and later I changed to mapbox.',
    url: 'https://github.com/CarlosPimentel10/foodOnline-Django',
    image: porfolioImage2,
  },
  {
    title: 'WaterWatch',
    description: 'A Java Spring Boot Web GIS App Serving Static data on water consumption for a given geographic region using apache tomcat on this one.',
    url: 'https://github.com/CarlosPimentel10/waterwatch',
    image: porfolioImage3,
  },
  {
    title: 'Customer Segments',
    description: 'This is a Machine Learning Project Using Supervised Learning Techniques to Effectively find market share based on customers buy habit.',
    url: 'https://github.com/CarlosPimentel10/Machine_learning_Projects/blob/master/customer_segments.ipynb',
    image: porfolioImage4,
  },
  {
    title: 'Geostatistics With ArcGIS Pro',
    description: 'This is A Geostatistics project done using ArcGIS Pro version 3. Have done a fishnet, tin and grid limits.',
    url: 'https://github.com/CarlosPimentel10/geostatistics_arcgis',
    image: porfolioImage5,
  },
  {
    title: '3D Map of Sines Port Area',
    description: 'This is a 3D Visualization created with React and Mapbox for my MSc. Dissertation.',
    url: 'https://github.com/CarlosPimentel10/sines_map_react',
    image: porfolioImage6,
  },
  {
    title: 'Flutter project on bitcoin ticker',
    description: 'Flutter bitcoin ticker.',
    url: 'https://github.com/CarlosPimentel10/bitcoin_ticker',
    image: porfolioImage7,
  },
  {
    title: 'Recipe Calculator Using Flutter',
    description: 'A recipe creation mobile app using flutter and dart.',
    url: 'https://github.com/CarlosPimentel10/recipe-calculator',
    image: porfolioImage8,
  },
  {
    title: 'Weather App Using Flutter',
    description: 'A weather API using flutter.',
    url: 'https://github.com/CarlosPimentel10/clima_flt',
    image: porfolioImage9,
  },
  {
    title: 'Recommendation System Using Java',
    description: 'Recommendation system built as part of Java Programming Specialization From Duke University Via Coursera.',
    url: 'https://github.com/CarlosPimentel10/build-a-recommendation-system',
    image: porfolioImage10,
  },
  {
    title: 'Simple Chat Bot Using Java',
    description: 'This is a Java chat bot project.',
    url: 'https://github.com/CarlosPimentel10/simpleChattyBot',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2024',
    location: 'University of Beira Interior',
    title: 'MSc. in Geographic Information Systems',
    content: <p>Mastered postgis and ETL propcess, geostatistics, geospatial analysis, Arcgis PRO, QGIS, Meta Shape, remote sensing and data aquisition.</p>,
  },
  {
    date: 'August 2017',
    location: 'Technical University of Angola',
    title: 'BSc. Geology',
    content: <p>I have mastered many mapping skills using QGIS, Mappinfo, AutoCAD. My project specialization was the analysis of the
      continental rift theory by sudying volcanic rocks on Namibe Souther Angola, and compare the geochemistry with Brazil similar
      rocks to determine correlation and deny or support the hypoteses that the African and South American continent were once a single
      continent.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2023 - Present',
    location: 'Sovos, Portugal',
    title: 'Software Support Analyst',
    content: (
      <p>
        Provide technical support on regular production issues, processes, and procedures; resolve product and
        service concerns or opportunities by utilizing product knowledge and organization acumen. Act as the
        subject matter expert for multiple products or functions.
      </p>
    ),
  },
  {
    date: 'January 2020 - December 2023',
    location: 'Freelancer, Luanda Angola',
    title: 'Software Developer',
    content: (
      <p>
        Worked with web technologies doing ecommerce and data analytics using Python.
      </p>
    ),
  },
  {
    date: 'January 2014 - December 2019',
    location: 'Freelancer, Luanda Angola',
    title: 'Web Designer and Developer',
    content: (
      <p>
        I have created web design prototypes, websites using WordPress CMS, PHP and vanilla JavaScript.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Carla Pascoal',
      text: 'I have had the opportunity to work with Carlos, as he made a wordpress for my geosciences women association, as well as, quality graphic design for my business page.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Abraham Sylvester',
      text: 'I have worked on some projects with Carlos and he has proven to be: a very creative, dedicated and hardworker designer and web developer.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'EPIE PROMISE NGOLEPIE',
      text: 'After working with Carlos, I would always comeback to him for his great creativity both in web design and software development as a whole. Very good work ethics and delivered more than I expected!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please use my email address below to get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'costa.pimentel@ubi.pt',
      href: 'mailto:costa.pimentel@ubi.pt',
    },
    {
      type: ContactType.Location,
      text: 'Porto, Portugal',
      href: 'https://www.google.ca/maps/place/Porto/@41.1621822,-8.6631533,13z/',
    },
    {
      type: ContactType.Github,
      text: 'CarlosPimentel10',
      href: 'https://github.com/CarlosPimentel10',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/CarlosPimentel10'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/10490028/carlos-pimentel'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/carlos-pimentel-5a3aa841/'},
];
