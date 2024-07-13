import  { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const stories = [
    { userName: "first_User", userImage: "path_to_image1.jpg" },
    { userName: "second_user", userImage: "path_to_image2.jpg" },
    { userName: "third_user", userImage: "path_to_image3.jpg" },
    { userName: "fourth_user", userImage: "path_to_image4.jpg" },
    { userName: "fifth_user", userImage: "path_to_image5.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id='HeroSection' className='section'>
      <button className='arrow left-arrow' onClick={handlePrevClick}>❮</button>
      <div id='story' className='story'>
        {stories.map((story, index) => (
          <Story
            key={index}
            userName={story.userName}
            userImage={story.userImage}
            isVisible={index === currentIndex}
          />



        ))}
      </div>
      <button className='arrow right-arrow' onClick={handleNextClick}>❯</button>
    </div>
  );
};

const Story = ({ userName, userImage, isVisible }) => {
  return (
    <section className={`story-item ${isVisible ? 'visible' : ''}`}>
      <img src={userImage} alt={`${userName}'s story`} className='story-image' />
      <div className='story-user-name'>{userName}</div>
    </section>
  );
};

export default HeroSection;
