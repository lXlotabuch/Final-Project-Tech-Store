/* eslint-disable max-len */
import React from 'react'
import { Container } from '../common/Container'
import { Wrapper } from '../common/Wrapper'
import Carousel from '../Carousel/Carousel'
import {
  ReviewTextWrap,
  ReviewIcon,
  ReviewText,
  ReviewAuthor,
  contentStyle,
  ReviewWrapper,
} from './StyledReviewSlider'
import bracketsIcon from '../../images/brackets.png'

const ReviewSlider = () => {
  const carouselSettings = {
    dots: true,
    autoplay: true,
  }
  return (
    <Container>
      <Wrapper>
        <Carousel carouselSettings={carouselSettings} hideArrows>
          <div>
            <div style={contentStyle}>
              <ReviewWrapper>
                <ReviewTextWrap>
                  <ReviewIcon src={bracketsIcon} />
                  <ReviewText>
                    My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.
                  </ReviewText>
                </ReviewTextWrap>
                <ReviewAuthor> - Tama Brown </ReviewAuthor>
              </ReviewWrapper>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <ReviewWrapper>
                <ReviewTextWrap>
                  <ReviewIcon src={bracketsIcon} />
                  <ReviewText>
                    Ordered my laptop liked the website and got an email confirming my order as well as some follow up emails from the ceo thanking me for the purchase, haven’t gotten my laptop yet but I’m sure I’ll be happy with it when I do.
                  </ReviewText>
                </ReviewTextWrap>
                <ReviewAuthor> - Jake Bronson </ReviewAuthor>
              </ReviewWrapper>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <ReviewWrapper>
                <ReviewTextWrap>
                  <ReviewIcon src={bracketsIcon} />
                  <ReviewText>
                    TechStore order process is made to be easy and understanding. Great setup for free stuff and free upgrades with certain choices of part, and constantly keeping you in the loop on your order. Thank you TechStore for the great experience.
                  </ReviewText>
                </ReviewTextWrap>
                <ReviewAuthor> - Kristen Jaymes </ReviewAuthor>
              </ReviewWrapper>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <ReviewWrapper>
                <ReviewTextWrap>
                  <ReviewIcon src={bracketsIcon} />
                  <ReviewText>
                    TechStore has been super great with communication and checking in with me on the progress of my laptop. I appreciate the level of care and service excellence I’ve experienced so far! I can’t wait to get my laptop!
                  </ReviewText>
                </ReviewTextWrap>
                <ReviewAuthor> - Adrian McAdams </ReviewAuthor>
              </ReviewWrapper>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <ReviewWrapper>
                <ReviewTextWrap>
                  <ReviewIcon src={bracketsIcon} />
                  <ReviewText>
                    I just got my new PC from TechStore and it was not only what I wanted but it was way beyond what I expected, the customer service is A++ and speed was not a factor I had it within a week.
                    This PC MSI Infinite RS 10TD-065US is by far the best buy I have ever made, I will be coming back now I can start Twitch the way its meant to be.
                    Thank You TechStore
                  </ReviewText>
                </ReviewTextWrap>
                <ReviewAuthor> - Travis Johnson </ReviewAuthor>
              </ReviewWrapper>
            </div>
          </div>
        </Carousel>
      </Wrapper>
    </Container>
  )
}

export default ReviewSlider
