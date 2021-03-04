import './HomePage.css';
import ActivitiesNorthLebanon from '../../Components/ActivitiesNorthLebanon/ActivitiesNorthLebanon';
import Header from '../../Components/Header/Header';
import NeedATourGuide from '../../Components/NeedATourGuide/NeedATourGuide';
import WhatWeDo from '../../Components/WhatWeDo/WhatWeDo';
import CityCard from '../../Components/Card/CityCard/CityCard';
import JoinOurTeam from '../../Components/Card/JoinOurTeam/JoinOurTeam.js';
import ActivityCard from '../../Components/Card/ActivityCard/ActivityCard';
import { gems, cities, TourGuideData } from '../../MockData/data';
import { Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

const HomePage = () => {
  const settings = {
    dotPosition: 'bottom',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <RightCircleOutlined />,
    prevArrow: <LeftCircleOutlined />,
  };

  return (
    <div className="homePage">
      <Header />

      <div className="under">
        <WhatWeDo activityNumber={TourGuideData.length} />

        <div className="hiddenGems">
          <h1>Hidden Gems in North Lebanon</h1>
        </div>

        <div className="cityCarousel">
          <Carousel {...settings}>
            {gems.map((gem) => (
              <div className="gemCards">
                <CityCard city={gem} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="act">
          <ActivitiesNorthLebanon />
        </div>

        <NeedATourGuide />

        <div className="cities">
          <div className="cityHeader">
            <h1>Cities in North Lebanon</h1>
            <a href="/cities">See more cities</a>
          </div>
          <div className="citysCard">
            {cities.map((city) => (
              <ActivityCard activity={city} />
            ))}
          </div>
        </div>

        <div className="teamCarousel">
          <Carousel autoplay effect="fade" dots={true} infinite>
            {TourGuideData.map((item, index) => {
              return index < 6
                ? item.tour_guides.map((guide) => <JoinOurTeam guide={guide} />)
                : null;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
