import shop from '../../images/about-us-page/computer-shop.png'
import logoIcon from '../../images/about-us-page/logo-icon.png'
import keyboard from '../../images/about-us-page/keyboard.png'
import heartIcon from '../../images/about-us-page/heart-icon.png'
import yellowComputer from '../../images/about-us-page/computer-yellow.jpg'
import coloredComputer from '../../images/about-us-page/computer-colored.png'
import starIcon from '../../images/about-us-page/star-icon.jpg'
import greenComputer from '../../images/about-us-page/computer-green.png'
import carIcon from '../../images/about-us-page/car-icon.png'

const data = [
  {
    title: 'A Family That Keeps',
    subtitle: 'On Growing',
    content: 'We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store',
    subcontent: 'Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success',
    img: shop,
    icon: null,
    id: 1
  },
  {
    title: 'shop.com',
    subtitle: '',
    content: 'Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.',
    subcontent: '',
    img: keyboard,
    icon: logoIcon,
    biggerSize: 'ok',
    id: 2
  },
  {
    title: 'You re In Safe Hands',
    subtitle: '',
    content: 'Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.',
    subcontent: '*Performance compared to i7-9700. Specs varies by model.',
    img: yellowComputer,
    icon: heartIcon,
    biggerSize: null,
    id: 3
  },
  {
    title: 'The Highest Quality of Products',
    subtitle: '',
    content: 'We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals',
    img: coloredComputer,
    icon: starIcon,
    id: 4,
    biggerSize: null,
  },
  {
    title: 'Delivery to All Regions',
    subtitle: '',
    content: 'We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.',
    img: greenComputer,
    icon: carIcon,
    id: 5,
    biggerSize: null
  }
]

export default data;
