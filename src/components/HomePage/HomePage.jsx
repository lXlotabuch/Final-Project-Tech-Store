import React, { useEffect } from 'react';
import {BannerSlider} from '../BannerSlider/BannerSlider';
import {HomepageFollowUs} from '../BrandsAndFollow/FollowUsInstagram';
import {HomepageBrands} from '../BrandsAndFollow/HomePageBrands';
import Description from '../Description/Description';
import NewProductsSlider from '../NewProductsSlider/NewProductsSlider';
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import {Catalog as ProductsPreview } from '../ProductsPreview/Catalog';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <BannerSlider />
      <NewProductsSlider />
      <ProductsPreview />
      <Description />
      <HomepageBrands />
      <HomepageFollowUs />
      <ReviewSlider />
    </div>
  )
}

export default HomePage;