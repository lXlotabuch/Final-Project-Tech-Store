import React from 'react'
import { Container } from '../common/Container'
import photoOne from '../../images/follow-us-block/insta_photo_one.png'
import photoTwo from '../../images/follow-us-block/insta_photo_two.png'
import photoThree from '../../images/follow-us-block/insta_photo_three.png'
import photoFous from '../../images/follow-us-block/insta_photo_four.png'
import photoFive from '../../images/follow-us-block/insta_photo_five.png'
import photoSix from '../../images/follow-us-block/insta_photo_six.png'
import photoSeven from '../../images/follow-us-block/insta_photo_seven.png'
import photoEight from '../../images/follow-us-block/insta_photo_eight.png'
import photoNine from '../../images/follow-us-block/insta_photo_nine.png'
import {
  Flex, BlockTitle, Posts, PostBox, Image, PostContent, PostDate
} from './StyledFollowUsInstagram'

export const HomepageFollowUs = () => {
  const pictures = [
    photoOne,
    photoTwo,
    photoThree,
    photoFous,
    photoFive,
    photoSix,
    photoSeven,
    photoEight,
    photoNine
  ];
  
  const now = '13.04.2021'
  const content = {
    title: 'Follow us on Instagram for News, Offers & More',
    text: 'If you’ve recently made a desktop PC or laptop, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
  }
  return (
    <Container>
      <Flex className="container">
        <BlockTitle>{content.title}</BlockTitle>
        <Posts className="posts">
          {pictures.map((element) => (
            <PostBox key={Math.random()}>
              <Image href="https://www.instagram.com/?hl=ru" target="blank"><img src={element} alt="instagram post" /></Image>
              <PostContent href="https://www.instagram.com/?hl=ru" target="blank">{content.text}</PostContent>
              <PostDate>{now}</PostDate>
            </PostBox>
          ))}
        </Posts>
      </Flex>
    </Container>
  )
}

export default HomepageFollowUs;