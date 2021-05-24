export const productMock = {
  _id: '604ffa554e7ef500153393f9',
  name: 'Monitor 27" AOC C27G2ZU/BK',
  enabled: true,
  currentPrice: 10600,
  previousPrice: 12600,
  categories: 'gamingMonitors',
  imageUrls: [
    'https://i8.rozetka.ua/goods/18842039/aoc_c27g2zu_bk_images_18842039923.jpg',
    'https://i2.rozetka.ua/goods/18842040/aoc_c27g2zu_bk_images_18842040211.jpg',
    'https://i8.rozetka.ua/goods/18842040/aoc_c27g2zu_bk_images_18842040937.jpg',
    'https://i8.rozetka.ua/goods/18842041/aoc_c27g2zu_bk_images_18842041729.jpg'
  ],
  quantity: 44,
  color: 'black',
  productUrl: '/gamingMonitors',
  brand: 'AOC',
  newProduct: 'no',
  reviews: [4, 2, 3, 5, 4, 5, 3, 4, 3, 5, 5, 4, 5],
  params: {
    updateFrequency: '240Hz',
    countryOfmanufacture: 'China',
    displayDiagonal: '27"',
    displayResolution: '1920x1080',
    responseTime: '0,5ms',
    screenSize: '32 inches',
    aspectRatio: '16:9'
  },
  description: 'An immersive 27" super curved gaming monitor with a fast 144Hz refresh rate and 1ms response time, helping you get the most out of your monitor. Features such as AMD FreeSync Premium, QHD resolution, and a curved design make this monitor ultra competitive for any gamer.',
  itemNo: '554194',
}
const productMock2 = {
  ...productMock,
  itemNo: '554195',
  _id: '604ffa554e7ef500153393f0',
}
export const productsMock = [
  {
    _id: '607057d9e448c200152a5047',
    cartQuantity: 1,
    product: productMock
  },
  {
    _id: '607057d9e448c200152a5048',
    cartQuantity: 1,
    product: productMock2
  }
];