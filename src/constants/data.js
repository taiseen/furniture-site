// import icons
import {
  IoLogoGithub,
  IoMdAddCircle,
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import images from '../assets'

export const navigation = [
  {
    name: 'home',
    href: '#home',
  },
  {
    name: 'features',
    href: '#features',
  },
  {
    name: 'products',
    href: '#products',
  },
  {
    name: 'about',
    href: '#about',
  },
  {
    name: 'contact',
    href: '#contact',
  },
];

export const hero = {
  title: 'Creative Home Simplify your Furniture',
  subtitle:
    'Do i have consent to record this meeting gain location, root-and-branch, review, nor game plan who’s the goto',
  buttonText: 'Shop Now',
};

export const stats = [
  {
    value: '7',
    text: 'Year Experience',
  },
  {
    value: '2',
    text: 'Opened in the country',
  },
  {
    value: '10k+',
    text: 'Furniture sold',
  },
  {
    value: '260+',
    text: 'Variant Furniture',
  },
];

export const features = {
  image: images.Features1Img,
  title: 'We Create your home more aesthetic',
  subtitle:
    'Furniture power is a software as services for multipurpose business management system',
  buttonText: 'Show Now',
  items: [
    {
      icon: IoIosCheckmarkCircle,
      title: 'Valuation Services',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
    {
      icon: IoIosCheckmarkCircle,
      title: 'Development of Furniture Models',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
  ],
  feature2: {
    image: images.Features2Img,
    title: 'The Best Furniture Manufacturer of your choice',
    subtitle:
      'Furniture power is a software as services for multipurpose business management system, especially for them who are running two or more business explore the future Furniture power is a software as services.',
  },
};

export const newInStore = {
  title: 'New In Store Now',
  subtitle: 'Get the latest items immediately with promo prices',
  link: 'Check all',
  icon: IoIosArrowRoundForward,
  products: [
    {
      name: 'chair',
      image: images.ChairImg,
    },
    {
      name: 'bed',
      image: images.BedImg,
    },
    {
      name: 'cupboard',
      image: images.CupboardImg,
    },
    {
      name: 'lighting',
      image: images.LightingImg,
    },
  ],
};

export const products = {
  title: 'All Products',
  subtitle:
    'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
  pages: [
    {
      productList: [
        {
          image: images.Product1Img,
          icon: IoMdAddCircle,
          name: 'Ceiling Light',
          price: 75,
          oldPrice: 82,
        },
        {
          image: images.Product2Img,
          icon: IoMdAddCircle,
          name: 'Wood Chair',
          price: 50,
          oldPrice: 70,
        },
        {
          image: images.Product3Img,
          icon: IoMdAddCircle,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: images.Product4Img,
          icon: IoMdAddCircle,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
        {
          image: images.Product5Img,
          icon: IoMdAddCircle,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: images.Product6Img,
          icon: IoMdAddCircle,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: images.Product7Img,
          icon: IoMdAddCircle,
          name: 'XORA corner desk',
          price: 320,
          oldPrice: 325,
        },
        {
          image: images.Product8Img,
          icon: IoMdAddCircle,
          name: 'Black Forest Series Wood',
          price: 225,
          oldPrice: 240,
        },
        {
          image: images.Product9Img,
          icon: IoMdAddCircle,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: images.Product10Img,
          icon: IoMdAddCircle,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: images.Product1Img,
          icon: IoMdAddCircle,
          name: 'Ceiling Light',
          price: 75,
          oldPrice: 82,
        },
        {
          image: images.Product2Img,
          icon: IoMdAddCircle,
          name: 'Wood Chair',
          price: 50,
          oldPrice: 70,
        },
        {
          image: images.Product3Img,
          icon: IoMdAddCircle,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: images.Product4Img,
          icon: IoMdAddCircle,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
        {
          image: images.Product5Img,
          icon: IoMdAddCircle,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: images.Product6Img,
          icon: IoMdAddCircle,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: images.Product7Img,
          icon: IoMdAddCircle,
          name: 'XORA corner desk',
          price: 320,
          oldPrice: 325,
        },
        {
          image: images.Product8Img,
          icon: IoMdAddCircle,
          name: 'Black Forest Series Wood',
          price: 225,
          oldPrice: 240,
        },
        {
          image: images.Product9Img,
          icon: IoMdAddCircle,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: images.Product10Img,
          icon: IoMdAddCircle,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'What people are saying about us',
  image: images.TestimonialImg,
  persons: [
    {
      avatar: images.Avatar1Img,
      name: 'Josh Smith',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional, interest and useful for a lot of people.”',
    },
    {
      avatar: images.Avatar2Img,
      name: 'Brandi Johns',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional, interest and useful for a lot of people.”',
    },
    {
      avatar: images.Avatar3Img,
      name: 'Paula Pfeffer',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional, interest and useful for a lot of people.”',
    },
    {
      avatar: images.Avatar4Img,
      name: 'Alex Zander',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional, interest and useful for a lot of people.”',
    },
  ],
};

export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: IoLogoYoutube,
      href: '#',
    },
    {
      icon: IoLogoInstagram,
      href: '#',
    },
    {
      icon: IoLogoGithub,
      href: '#',
    },
    {
      icon: IoLogoFacebook,
      href: '#',
    },
  ],
  copyright: 'FurniShop 2023 - All Rights Reserved.',
};
